import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { computeEloRatings } from "@/lib/elo";
import { getProviderBySlug } from "@/lib/providers";

export async function GET() {
  try {
    const providers = await prisma.provider.findMany();
    const votes = await prisma.vote.findMany({
      select: {
        providerAId: true,
        providerBId: true,
        winnerId: true,
      },
    });

    const providerIds = providers.map((p) => p.id);
    const ratings = computeEloRatings(providerIds, votes);

    const leaderboard = providers
      .map((p) => {
        const r = ratings.get(p.id)!;
        const def = getProviderBySlug(p.slug);
        return {
          id: p.id,
          name: p.name,
          slug: p.slug,
          logoUrl: p.logoUrl,
          model: def?.model ?? "",
          rating: r.rating,
          wins: r.wins,
          losses: r.losses,
          ties: r.ties,
          totalMatches: r.totalMatches,
          winRate: r.winRate,
        };
      })
      .sort((a, b) => b.rating - a.rating);

    const MIN_VOTES_FOR_SIGNIFICANCE = 100;

    return NextResponse.json({
      leaderboard,
      totalVotes: votes.length,
      isSignificant: votes.length >= MIN_VOTES_FOR_SIGNIFICANCE,
    });
  } catch (error) {
    console.error("Leaderboard error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
