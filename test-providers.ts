import "dotenv/config";
import fs from "fs";
import path from "path";
import { transcribeWithGladia } from "./src/lib/providers/gladia";
import { transcribeWithDeepgram } from "./src/lib/providers/deepgram";
import { transcribeWithAssemblyAI } from "./src/lib/providers/assemblyai";
import { transcribeWithElevenLabs } from "./src/lib/providers/elevenlabs";
import { transcribeWithSpeechmatics } from "./src/lib/providers/speechmatics";
import { transcribeWithMistral } from "./src/lib/providers/mistral";
import type { TranscribeResult } from "./src/lib/transcribe";

const PROVIDERS: Record<string, (audio: Buffer, mime: string) => Promise<TranscribeResult>> = {
  gladia: transcribeWithGladia,
  deepgram: transcribeWithDeepgram,
  assemblyai: transcribeWithAssemblyAI,
  elevenlabs: transcribeWithElevenLabs,
  speechmatics: transcribeWithSpeechmatics,
  mistral: transcribeWithMistral,
};

const TEST_DIR = path.join(path.dirname(new URL(import.meta.url).pathname), "test-audio");

function getAudioFiles(): string[] {
  return fs
    .readdirSync(TEST_DIR)
    .filter((f) => /\.(wav|mp3|m4a|ogg|webm|flac)$/i.test(f))
    .map((f) => path.join(TEST_DIR, f));
}

function mimeFromExt(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  const map: Record<string, string> = {
    ".wav": "audio/wav",
    ".mp3": "audio/mpeg",
    ".m4a": "audio/mp4",
    ".ogg": "audio/ogg",
    ".webm": "audio/webm",
    ".flac": "audio/flac",
  };
  return map[ext] || "audio/wav";
}

async function main() {
  const audioFiles = getAudioFiles();
  if (audioFiles.length === 0) {
    console.error("No audio files found in test-audio/");
    process.exit(1);
  }

  const audioFile = audioFiles[0];
  const audioBuffer = fs.readFileSync(audioFile);
  const mimeType = mimeFromExt(audioFile);

  console.log(`\nUsing: ${path.basename(audioFile)} (${mimeType}, ${(audioBuffer.length / 1024).toFixed(0)} KB)\n`);
  console.log("=".repeat(80));

  const slugs = Object.keys(PROVIDERS);
  let passed = 0;
  let failed = 0;

  for (const slug of slugs) {
    const fn = PROVIDERS[slug];
    const label = slug.padEnd(14);

    try {
      const start = Date.now();
      const result = await fn(audioBuffer, mimeType);
      const elapsed = Date.now() - start;

      if (result.error) {
        console.log(`  ✗ ${label}  ERROR (${elapsed}ms): ${result.error}`);
        failed++;
        continue;
      }

      const wordCount = result.words?.length ?? 0;
      const preview = result.transcript.length > 80
        ? result.transcript.slice(0, 80) + "…"
        : result.transcript;

      console.log(`  ✓ ${label}  ${elapsed}ms  ${wordCount} words  "${preview}"`);

      if (wordCount === 0) {
        console.log(`    ⚠ No word timestamps returned`);
      }

      if (!result.transcript.trim()) {
        console.log(`    ⚠ Empty transcript`);
        failed++;
      } else {
        passed++;
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.log(`  ✗ ${label}  EXCEPTION: ${msg}`);
      failed++;
    }
  }

  console.log("=".repeat(80));
  console.log(`\n  ${passed} passed, ${failed} failed, ${slugs.length} total\n`);

  process.exit(failed > 0 ? 1 : 0);
}

main();
