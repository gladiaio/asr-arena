import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
import type { TranscribeResult } from "../transcribe";

export async function transcribeWithElevenLabs(
  audio: Buffer,
  mimeType: string
): Promise<TranscribeResult> {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) throw new Error("ELEVENLABS_API_KEY not set");

  const start = Date.now();

  const client = new ElevenLabsClient({ apiKey });

  const ext = mimeType.includes("wav") ? "audio.wav"
    : mimeType.includes("mp3") || mimeType.includes("mpeg") ? "audio.mp3"
    : mimeType.includes("mp4") || mimeType.includes("m4a") ? "audio.m4a"
    : "audio.webm";

  const blob = new Blob([new Uint8Array(audio)], { type: mimeType });
  const file = new File([blob], ext, { type: mimeType });

  const response = await client.speechToText.convert({
    file,
    modelId: "scribe_v2",
  });

  const durationMs = Date.now() - start;
  const body = response as unknown as { text?: string };

  return {
    transcript: body.text ?? "",
    durationMs,
  };
}
