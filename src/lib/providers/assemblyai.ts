import { AssemblyAI } from "assemblyai";
import type { TranscribeResult } from "../transcribe";

export async function transcribeWithAssemblyAI(
  audio: Buffer,
  _mimeType: string
): Promise<TranscribeResult> {
  const apiKey = process.env.ASSEMBLYAI_API_KEY;
  if (!apiKey) throw new Error("ASSEMBLYAI_API_KEY not set");

  const start = Date.now();

  const client = new AssemblyAI({ apiKey });

  const uploadUrl = await client.files.upload(audio);

  const transcript = await client.transcripts.transcribe({
    audio: uploadUrl,
    language_detection: true,
  });

  if (transcript.status === "error") {
    throw new Error(`AssemblyAI error: ${transcript.error}`);
  }

  const durationMs = Date.now() - start;

  return {
    transcript: transcript.text ?? "",
    durationMs,
  };
}
