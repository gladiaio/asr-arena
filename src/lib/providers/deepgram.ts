import { DeepgramClient } from "@deepgram/sdk";
import { Readable } from "stream";
import type { TranscribeResult } from "../transcribe";

interface DeepgramTranscriptResponse {
  results?: {
    channels?: {
      alternatives?: {
        transcript?: string;
      }[];
    }[];
  };
}

export async function transcribeWithDeepgram(
  audio: Buffer,
  _mimeType: string
): Promise<TranscribeResult> {
  const apiKey = process.env.DEEPGRAM_API_KEY;
  if (!apiKey) throw new Error("DEEPGRAM_API_KEY not set");

  const start = Date.now();

  const deepgram = new DeepgramClient({ apiKey });

  const stream = Readable.from(audio);

  const response = await deepgram.listen.v1.media.transcribeFile(stream, {
    model: "nova-3",
    smart_format: true,
    detect_language: true,
  });

  const data = response as unknown as DeepgramTranscriptResponse;
  const transcript =
    data?.results?.channels?.[0]?.alternatives?.[0]?.transcript ?? "";

  const durationMs = Date.now() - start;

  return { transcript, durationMs };
}
