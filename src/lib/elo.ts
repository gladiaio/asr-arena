interface VoteRecord {
  providerAId: string;
  providerBId: string;
  winnerId: string | null;
}

export interface EloRating {
  providerId: string;
  rating: number;
  wins: number;
  losses: number;
  ties: number;
  totalMatches: number;
  winRate: number;
}

const K = 32;
const INITIAL_RATING = 1500;

function expectedScore(ratingA: number, ratingB: number): number {
  return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
}

export function computeEloRatings(
  providerIds: string[],
  votes: VoteRecord[]
): Map<string, EloRating> {
  const ratings = new Map<string, EloRating>();

  for (const id of providerIds) {
    ratings.set(id, {
      providerId: id,
      rating: INITIAL_RATING,
      wins: 0,
      losses: 0,
      ties: 0,
      totalMatches: 0,
      winRate: 0,
    });
  }

  for (const vote of votes) {
    const a = ratings.get(vote.providerAId);
    const b = ratings.get(vote.providerBId);
    if (!a || !b) continue;

    const expectedA = expectedScore(a.rating, b.rating);
    const expectedB = expectedScore(b.rating, a.rating);

    let scoreA: number;
    let scoreB: number;

    if (vote.winnerId === null) {
      scoreA = 0.5;
      scoreB = 0.5;
      a.ties++;
      b.ties++;
    } else if (vote.winnerId === vote.providerAId) {
      scoreA = 1;
      scoreB = 0;
      a.wins++;
      b.losses++;
    } else {
      scoreA = 0;
      scoreB = 1;
      a.losses++;
      b.wins++;
    }

    a.rating += K * (scoreA - expectedA);
    b.rating += K * (scoreB - expectedB);
    a.totalMatches++;
    b.totalMatches++;
  }

  for (const r of ratings.values()) {
    r.rating = Math.round(r.rating);
    r.winRate = r.totalMatches > 0 ? r.wins / r.totalMatches : 0;
  }

  return ratings;
}
