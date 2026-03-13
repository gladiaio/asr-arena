import { computeWordDiff } from "./src/lib/diff";

let passed = 0;
let failed = 0;

function test(name: string, fn: () => void) {
  try {
    fn();
    console.log(`  ✓ ${name}`);
    passed++;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.log(`  ✗ ${name}`);
    console.log(`    ${msg}`);
    failed++;
  }
}

function assert(condition: boolean, msg: string) {
  if (!condition) throw new Error(msg);
}

function diffWords(text: string, segments: { text: string; type: string }[]): string[] {
  return segments
    .filter((s) => s.type === "diff")
    .flatMap((s) => s.text.split(/\s+/).filter(Boolean));
}

console.log("\nDiff tests\n" + "=".repeat(60));

test("identical strings produce all 'same'", () => {
  const { segmentsA, segmentsB, diffIndicesA, diffIndicesB } = computeWordDiff("hello world", "hello world");
  assert(segmentsA.every((s) => s.type === "same"), `A: ${JSON.stringify(segmentsA)}`);
  assert(segmentsB.every((s) => s.type === "same"), `B: ${JSON.stringify(segmentsB)}`);
  assert(diffIndicesA.size === 0, "A should have no diff indices");
  assert(diffIndicesB.size === 0, "B should have no diff indices");
});

test("completely different strings produce all 'diff'", () => {
  const { segmentsA, segmentsB } = computeWordDiff("hello world", "foo bar");
  assert(segmentsA.every((s) => s.type === "diff"), `A: ${JSON.stringify(segmentsA)}`);
  assert(segmentsB.every((s) => s.type === "diff"), `B: ${JSON.stringify(segmentsB)}`);
});

test("capitalization differences only highlight the changed words", () => {
  const { diffIndicesA, diffIndicesB } = computeWordDiff("Hello World", "hello world");
  assert(diffIndicesA.size === 2, `A: expected 2 diffs, got ${diffIndicesA.size}`);
  assert(diffIndicesB.size === 2, `B: expected 2 diffs, got ${diffIndicesB.size}`);
});

test("punctuation differences only highlight the changed words", () => {
  const a = "Hello world";
  const b = "Hello, world.";
  const { diffIndicesA, diffIndicesB } = computeWordDiff(a, b);
  const wordsA = a.split(/\s+/);
  const wordsB = b.split(/\s+/);
  const dA = [...diffIndicesA].map((i) => wordsA[i]);
  const dB = [...diffIndicesB].map((i) => wordsB[i]);
  assert(dA.includes("Hello"), `A should diff 'Hello': ${JSON.stringify(dA)}`);
  assert(dA.includes("world"), `A should diff 'world': ${JSON.stringify(dA)}`);
  assert(dB.includes("Hello,"), `B should diff 'Hello,': ${JSON.stringify(dB)}`);
  assert(dB.includes("world."), `B should diff 'world.': ${JSON.stringify(dB)}`);
  assert(diffIndicesA.size === 2, `A should have exactly 2 diffs, got ${diffIndicesA.size}`);
});

test("one word substitution in the middle", () => {
  const { segmentsA, segmentsB } = computeWordDiff(
    "the quick brown fox",
    "the slow brown fox"
  );
  const dA = diffWords("", segmentsA);
  const dB = diffWords("", segmentsB);
  assert(dA.length === 1 && dA[0] === "quick", `A diffs: ${JSON.stringify(dA)}`);
  assert(dB.length === 1 && dB[0] === "slow", `B diffs: ${JSON.stringify(dB)}`);
});

test("extra words at end are marked as diff", () => {
  const { segmentsB, diffIndicesB } = computeWordDiff("hello", "hello world");
  assert(diffIndicesB.has(1), "B index 1 ('world') should be diff");
  assert(diffIndicesB.size === 1, `B should have 1 diff, got ${diffIndicesB.size}`);
  assert(segmentsB.length === 2, `B should have 2 segments: ${JSON.stringify(segmentsB)}`);
});

test("empty vs non-empty", () => {
  const { segmentsA, segmentsB } = computeWordDiff("", "hello");
  assert(segmentsA.length === 0, `A should be empty: ${JSON.stringify(segmentsA)}`);
  assert(segmentsB.length > 0 && segmentsB[0].type === "diff", `B: ${JSON.stringify(segmentsB)}`);
});

test("punctuation-only transcript vs punctuated — alignment stays tight", () => {
  const a = "Actually I changed my mind about that Can we go back to the original plan I think it was simpler and easier to maintain in the long run";
  const b = "Actually, I changed my mind about that. Can we go back to the original plan? I think it was simpler and easier to maintain in the long run.";
  const { diffIndicesA, diffIndicesB } = computeWordDiff(a, b);
  const wordsA = a.split(/\s+/);
  const wordsB = b.split(/\s+/);
  const dA = [...diffIndicesA].map((i) => wordsA[i]);
  const dB = [...diffIndicesB].map((i) => wordsB[i]);

  assert(dA.includes("Actually"), `A should diff 'Actually': ${JSON.stringify(dA)}`);
  assert(dB.includes("Actually,"), `B should diff 'Actually,': ${JSON.stringify(dB)}`);
  assert(dA.includes("that"), `A should diff 'that': ${JSON.stringify(dA)}`);
  assert(dB.includes("that."), `B should diff 'that.': ${JSON.stringify(dB)}`);
  assert(dA.includes("plan"), `A should diff 'plan': ${JSON.stringify(dA)}`);
  assert(dB.includes("plan?"), `B should diff 'plan?': ${JSON.stringify(dB)}`);
  assert(dA.includes("run"), `A should diff 'run': ${JSON.stringify(dA)}`);
  assert(dB.includes("run."), `B should diff 'run.': ${JSON.stringify(dB)}`);

  assert(!dA.includes("Can"), `A should NOT diff 'Can': ${JSON.stringify(dA)}`);
  assert(!dA.includes("think"), `A should NOT diff 'think': ${JSON.stringify(dA)}`);
  assert(!dB.includes("we"), `B should NOT diff 'we': ${JSON.stringify(dB)}`);

  assert(diffIndicesA.size === 4, `A should have 4 diffs, got ${diffIndicesA.size}: ${JSON.stringify(dA)}`);
  assert(diffIndicesB.size === 4, `B should have 4 diffs, got ${diffIndicesB.size}: ${JSON.stringify(dB)}`);
});

test("mixed capitalization + punctuation differences", () => {
  const a = "hold on let me check something real quick i remember seeing an error message about this yesterday but i cannot recall what it said exactly";
  const b = "Hold on, let me check something real quick. I remember seeing an error message about this yesterday, but I cannot recall what it said exactly";
  const { diffIndicesA, diffIndicesB } = computeWordDiff(a, b);
  const wordsA = a.split(/\s+/);
  const wordsB = b.split(/\s+/);
  const dA = [...diffIndicesA].map((i) => wordsA[i]);
  const dB = [...diffIndicesB].map((i) => wordsB[i]);

  assert(dA.includes("hold"), `A should diff 'hold': ${JSON.stringify(dA)}`);
  assert(dB.includes("Hold"), `B should diff 'Hold': ${JSON.stringify(dB)}`);
  assert(dA.includes("on"), `A should diff 'on': ${JSON.stringify(dA)}`);
  assert(dB.includes("on,"), `B should diff 'on,': ${JSON.stringify(dB)}`);
  assert(dA.includes("quick"), `A should diff 'quick': ${JSON.stringify(dA)}`);
  assert(dB.includes("quick."), `B should diff 'quick.': ${JSON.stringify(dB)}`);
  assert(dA.includes("yesterday"), `A should diff 'yesterday': ${JSON.stringify(dA)}`);
  assert(dB.includes("yesterday,"), `B should diff 'yesterday,': ${JSON.stringify(dB)}`);

  const iWords = dA.filter((w) => w === "i");
  assert(iWords.length === 2, `A should have 2 'i' diffs: ${JSON.stringify(dA)}`);

  assert(!dA.includes("let"), `A should NOT diff 'let': ${JSON.stringify(dA)}`);
  assert(!dA.includes("exactly"), `A should NOT diff 'exactly': ${JSON.stringify(dA)}`);
  assert(!dB.includes("let"), `B should NOT diff 'let': ${JSON.stringify(dB)}`);
});

test("word substitution (different word, not just punctuation)", () => {
  const a = "je suis le CTO de Gladia";
  const b = "je suis le site de Gladia";
  const { diffIndicesA, diffIndicesB } = computeWordDiff(a, b);
  const wordsA = a.split(/\s+/);
  const wordsB = b.split(/\s+/);
  const dA = [...diffIndicesA].map((i) => wordsA[i]);
  const dB = [...diffIndicesB].map((i) => wordsB[i]);
  assert(dA.length === 1 && dA[0] === "CTO", `A diffs: ${JSON.stringify(dA)}`);
  assert(dB.length === 1 && dB[0] === "site", `B diffs: ${JSON.stringify(dB)}`);
});

test("real-world: capitalization differences at multiple positions", () => {
  const a = "let me know when you have a chance to look at this no rush but i would appreciate your feedback";
  const b = "Let me know when you have a chance to look at this No rush but I would appreciate your feedback";
  const { diffIndicesA, diffIndicesB } = computeWordDiff(a, b);
  const wordsA = a.split(/\s+/);
  const wordsB = b.split(/\s+/);
  const dA = [...diffIndicesA].map((i) => wordsA[i]);
  const dB = [...diffIndicesB].map((i) => wordsB[i]);

  assert(dA.includes("let"), `A should diff 'let': ${JSON.stringify(dA)}`);
  assert(dB.includes("Let"), `B should diff 'Let': ${JSON.stringify(dB)}`);
  assert(dA.includes("no"), `A should diff 'no': ${JSON.stringify(dA)}`);
  assert(dB.includes("No"), `B should diff 'No': ${JSON.stringify(dB)}`);
  assert(dA.includes("i"), `A should diff 'i': ${JSON.stringify(dA)}`);
  assert(dB.includes("I"), `B should diff 'I': ${JSON.stringify(dB)}`);

  assert(!dA.includes("me"), `A should NOT diff 'me': ${JSON.stringify(dA)}`);
  assert(diffIndicesA.size === 3, `A should have 3 diffs, got ${diffIndicesA.size}: ${JSON.stringify(dA)}`);
});

console.log("=".repeat(60));
console.log(`\n  ${passed} passed, ${failed} failed\n`);
process.exit(failed > 0 ? 1 : 0);
