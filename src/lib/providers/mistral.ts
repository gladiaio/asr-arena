import { Mistral } from "@mistralai/mistralai";
import type { TranscribeResult, WordTimestamp } from "../transcribe";

interface MistralWord {
  word: string;
  start: number;
  end: number;
}

interface MistralSegment {
  text: string;
  words?: MistralWord[];
}

export async function transcribeWithMistral(
  audio: Buffer,
  _mimeType: string
): Promise<TranscribeResult> {
  const apiKey = process.env.MISTRAL_API_KEY;
  if (!apiKey) throw new Error("MISTRAL_API_KEY not set");

  const start = Date.now();

  const client = new Mistral({ apiKey });

  const blob = new Blob([new Uint8Array(audio)], { type: "audio/wav" });
  const file = new File([blob], "audio.wav", { type: "audio/wav" });

  const response = await client.audio.transcriptions.complete({
    model: "voxtral-mini-latest",
    file,
    timestampGranularities: ["word"],
  });

  const durationMs = Date.now() - start;

  const words: WordTimestamp[] = [];
  const segments = (response as unknown as { segments?: MistralSegment[] }).segments;
  if (segments) {
    for (const seg of segments) {
      for (const w of seg.words || []) {
        words.push({ word: w.word, start: w.start, end: w.end });
      }
    }
  }

  return {
    transcript: response.text ?? "",
    words,
    durationMs,
  };
}
