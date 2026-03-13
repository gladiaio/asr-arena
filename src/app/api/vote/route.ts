import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sessionId, providerAId, providerBId, winnerId } = body;

    if (!sessionId || !providerAId || !providerBId) {
      return NextResponse.json(
        { error: "sessionId, providerAId, and providerBId are required" },
        { status: 400 }
      );
    }

    if (winnerId && winnerId !== providerAId && winnerId !== providerBId) {
      return NextResponse.json(
        { error: "winnerId must be one of the two providers or null (tie)" },
        { status: 400 }
      );
    }

    let session = await prisma.session.findUnique({ where: { id: sessionId } });
    if (!session) {
      session = await prisma.session.create({ data: { id: sessionId } });
    }

    const vote = await prisma.vote.create({
      data: {
        sessionId,
        providerAId,
        providerBId,
        winnerId: winnerId || null,
      },
    });

    return NextResponse.json({ vote });
  } catch (error) {
    console.error("Vote error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
