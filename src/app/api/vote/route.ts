import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyMatchToken } from "@/lib/match-token";
import { getProviderBySlug } from "@/lib/providers";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { matchToken, choice } = body;

    if (!matchToken || !choice) {
      return NextResponse.json(
        { error: "matchToken and choice are required" },
        { status: 400 }
      );
    }

    if (!["a", "b", "tie"].includes(choice)) {
      return NextResponse.json(
        { error: "choice must be 'a', 'b', or 'tie'" },
        { status: 400 }
      );
    }

    const match = verifyMatchToken(matchToken);
    if (!match) {
      return NextResponse.json(
        { error: "Invalid or tampered match token" },
        { status: 403 }
      );
    }

    const { sessionId, providerAId, providerBId } = match;

    const winnerId =
      choice === "a" ? providerAId :
      choice === "b" ? providerBId :
      null;

    let session = await prisma.session.findUnique({ where: { id: sessionId } });
    if (!session) {
      session = await prisma.session.create({ data: { id: sessionId } });
    }

    await prisma.vote.create({
      data: {
        sessionId,
        providerAId,
        providerBId,
        winnerId,
      },
    });

    const [providerA, providerB] = await Promise.all([
      prisma.provider.findUnique({ where: { id: providerAId } }),
      prisma.provider.findUnique({ where: { id: providerBId } }),
    ]);

    if (!providerA || !providerB) {
      return NextResponse.json({ error: "Provider not found" }, { status: 500 });
    }

    const defA = getProviderBySlug(providerA.slug);
    const defB = getProviderBySlug(providerB.slug);

    return NextResponse.json({
      providerA: {
        id: providerA.id,
        slug: providerA.slug,
        name: providerA.name,
        logoUrl: providerA.logoUrl,
        color: defA?.color,
      },
      providerB: {
        id: providerB.id,
        slug: providerB.slug,
        name: providerB.name,
        logoUrl: providerB.logoUrl,
        color: defB?.color,
      },
      winnerId,
    });
  } catch (error) {
    console.error("Vote error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
