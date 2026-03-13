export interface DiffSegment {
  text: string;
  type: "same" | "diff";
}

/**
 * Alignment-based word diff between two transcripts of the same audio.
 *
 * Uses Needleman-Wunsch sequence alignment with normalized scoring
 * (lowercase, stripped punctuation) so that "that" aligns with "that."
 * and "Hold" aligns with "hold". After alignment, any pair whose RAW
 * forms differ is marked as a diff — this catches punctuation,
 * capitalization, and word-choice differences without cascading
 * misalignment.
 */
export function computeWordDiff(
  a: string,
  b: string
): {
  segmentsA: DiffSegment[];
  segmentsB: DiffSegment[];
  diffIndicesA: Set<number>;
  diffIndicesB: Set<number>;
} {
  const wordsA = a.split(/\s+/).filter(Boolean);
  const wordsB = b.split(/\s+/).filter(Boolean);

  const alignment = align(wordsA, wordsB);

  const diffIndicesA = new Set<number>();
  const diffIndicesB = new Set<number>();

  for (const step of alignment) {
    if (step.type !== "match") {
      if (step.idxA != null) diffIndicesA.add(step.idxA);
      if (step.idxB != null) diffIndicesB.add(step.idxB);
    }
  }

  return {
    segmentsA: buildSegments(wordsA, diffIndicesA),
    segmentsB: buildSegments(wordsB, diffIndicesB),
    diffIndicesA,
    diffIndicesB,
  };
}

function normalize(w: string): string {
  return w.toLowerCase().replace(/[^\p{L}\p{N}']/gu, "");
}

interface AlignmentStep {
  type: "match" | "substitution" | "gapA" | "gapB";
  idxA: number | null;
  idxB: number | null;
}

function align(wordsA: string[], wordsB: string[]): AlignmentStep[] {
  const m = wordsA.length;
  const n = wordsB.length;

  const GAP = 1;
  const MISMATCH = 1.5;

  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i * GAP;
  for (let j = 0; j <= n; j++) dp[0][j] = j * GAP;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const normA = normalize(wordsA[i - 1]);
      const normB = normalize(wordsB[j - 1]);
      const diagCost = normA === normB ? 0 : MISMATCH;

      dp[i][j] = Math.min(
        dp[i - 1][j - 1] + diagCost,
        dp[i - 1][j] + GAP,
        dp[i][j - 1] + GAP
      );
    }
  }

  const steps: AlignmentStep[] = [];
  let i = m, j = n;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0) {
      const normA = normalize(wordsA[i - 1]);
      const normB = normalize(wordsB[j - 1]);
      const diagCost = normA === normB ? 0 : MISMATCH;

      if (dp[i][j] === dp[i - 1][j - 1] + diagCost) {
        const rawMatch = wordsA[i - 1] === wordsB[j - 1];
        steps.push({
          type: rawMatch ? "match" : "substitution",
          idxA: i - 1,
          idxB: j - 1,
        });
        i--;
        j--;
        continue;
      }
    }

    if (i > 0 && dp[i][j] === dp[i - 1][j] + GAP) {
      steps.push({ type: "gapA", idxA: i - 1, idxB: null });
      i--;
    } else {
      steps.push({ type: "gapB", idxA: null, idxB: j - 1 });
      j--;
    }
  }

  steps.reverse();
  return steps;
}

function buildSegments(words: string[], diffIndices: Set<number>): DiffSegment[] {
  const segments: DiffSegment[] = [];
  let currentType: "same" | "diff" | null = null;
  let currentText = "";

  for (let i = 0; i < words.length; i++) {
    const type = diffIndices.has(i) ? "diff" : "same";
    if (type !== currentType && currentText) {
      segments.push({ text: currentText, type: currentType ?? "same" });
      currentText = "";
    }
    currentType = type;
    if (currentText) currentText += " ";
    currentText += words[i];
  }

  if (currentText) {
    segments.push({ text: currentText, type: currentType ?? "same" });
  }

  return segments;
}
