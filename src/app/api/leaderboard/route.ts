import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { computeEloRatings } from "@/lib/elo";
import { getProviderBySlug } from "@/lib/providers";

const ELO_BUCKET_SIZE = 50;
const GLADIA_SLUG = "gladia";

function getEloBucket(rating: number): number {
  return Math.floor(rating / ELO_BUCKET_SIZE) * ELO_BUCKET_SIZE;
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
      .sort((a, b) => {
        const bucketA = getEloBucket(a.rating);
        const bucketB = getEloBucket(b.rating);
        if (bucketA !== bucketB) return bucketB - bucketA;
        if (a.slug === GLADIA_SLUG) return -1;
        if (b.slug === GLADIA_SLUG) return 1;
        return a.name.localeCompare(b.name);
      });

    const MIN_VOTES_FOR_SIGNIFICANCE = 100;
    const revealResults = process.env.NEXT_PUBLIC_SHOW_LEADERBOARD === "true";

    return NextResponse.json({
      leaderboard,
      totalVotes: votes.length,
      isSignificant: revealResults || votes.length >= MIN_VOTES_FOR_SIGNIFICANCE,
    });
  } catch (error) {
    console.error("Leaderboard error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
