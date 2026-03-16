import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { transcribeForProvider } from "@/lib/transcribe";
import { signMatchToken } from "@/lib/match-token";

export const maxDuration = 120;

interface ProviderRecord {
  id: string;
  slug: string;
  name: string;
  logoUrl: string;
}

async function pickMatchup(providers: ProviderRecord[]) {
  const pairs: [ProviderRecord, ProviderRecord][] = [];
  for (let i = 0; i < providers.length; i++) {
    for (let j = i + 1; j < providers.length; j++) {
      pairs.push([providers[i], providers[j]]);
    }
  }

  const pairCounts = await prisma.vote.groupBy({
    by: ["providerAId", "providerBId"],
    _count: true,
  });

  const countMap = new Map<string, number>();
  for (const row of pairCounts) {
    const key = [row.providerAId, row.providerBId].sort().join(":");
    countMap.set(key, (countMap.get(key) || 0) + row._count);
  }

  const minCount = Math.min(
    ...pairs.map((p) => countMap.get([p[0].id, p[1].id].sort().join(":")) || 0)
  );

  const leastPlayed = pairs.filter(
    (p) => (countMap.get([p[0].id, p[1].id].sort().join(":")) || 0) === minCount
  );

  const chosen = leastPlayed[Math.floor(Math.random() * leastPlayed.length)];
  const swap = Math.random() < 0.5;

  return {
    providerA: swap ? chosen[1] : chosen[0],
    providerB: swap ? chosen[0] : chosen[1],
  };
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const sessionId = formData.get("sessionId") as string;
    const audioFile = formData.get("audio") as File | null;

    if (!sessionId) {
      return NextResponse.json({ error: "sessionId is required" }, { status: 400 });
    }

    if (!audioFile) {
      return NextResponse.json({ error: "audio file is required" }, { status: 400 });
    }

    let session = await prisma.session.findUnique({ where: { id: sessionId } });
    if (!session) {
      session = await prisma.session.create({ data: { id: sessionId } });
    }

    const providers = await prisma.provider.findMany();
    if (providers.length < 2) {
      return NextResponse.json({ error: "Not enough providers" }, { status: 500 });
    }

    const { providerA, providerB } = await pickMatchup(providers);

    const audioBuffer = Buffer.from(await audioFile.arrayBuffer());
    const mimeType = audioFile.type || "audio/webm";

    const [resultA, resultB] = await Promise.all([
      transcribeForProvider(providerA.slug, audioBuffer, mimeType),
      transcribeForProvider(providerB.slug, audioBuffer, mimeType),
    ]);

    const matchToken = signMatchToken(sessionId, providerA.id, providerB.id);

    return NextResponse.json({
      matchToken,
      transcriptA: resultA.transcript,
      transcriptB: resultB.transcript,
      wordsA: resultA.words || [],
      wordsB: resultB.words || [],
      errorA: resultA.error || null,
      errorB: resultB.error || null,
    });
  } catch (error) {
    console.error("Transcribe error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
