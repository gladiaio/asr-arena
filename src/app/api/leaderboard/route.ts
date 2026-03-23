import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { computeEloRatings } from "@/lib/elo";
import { getProviderBySlug } from "@/lib/providers";
import { showLeaderboard } from "@/flags";

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

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

    const isSignificant = await showLeaderboard();

    const entries = providers.map((p) => {
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
    });

    const sorted = isSignificant
      ? entries.sort((a, b) => b.rating - a.rating)
      : shuffleArray(entries);

    const leaderboard = sorted.map(({ slug: _slug, ...rest }) => rest);

    return NextResponse.json({
      leaderboard,
      totalVotes: votes.length,
      isSignificant,
    });
  } catch (error) {
    console.error("Leaderboard error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
