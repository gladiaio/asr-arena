import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const votes = await prisma.vote.findMany({
      where: { sessionId: id },
      include: {
        providerA: true,
        providerB: true,
        winner: true,
      },
    });

    const providerWins: Record<
      string,
      { name: string; wins: number; appearances: number }
    > = {};

    for (const vote of votes) {
      for (const provider of [vote.providerA, vote.providerB]) {
        if (!providerWins[provider.id]) {
          providerWins[provider.id] = {
            name: provider.name,
            wins: 0,
            appearances: 0,
          };
        }
        providerWins[provider.id].appearances++;
      }

      if (vote.winnerId && providerWins[vote.winnerId]) {
        providerWins[vote.winnerId].wins++;
      }
    }

    return NextResponse.json({
      totalVotes: votes.length,
      providerWins,
    });
  } catch (error) {
    console.error("Session stats error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
