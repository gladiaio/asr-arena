"use client";

import { useState, useRef, useCallback } from "react";

const MAX_DURATION_SECONDS = 120;

function getAudioDuration(file: File): Promise<number> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const audio = new Audio();
    audio.preload = "metadata";
    audio.onloadedmetadata = () => {
      URL.revokeObjectURL(url);
      resolve(audio.duration);
    };
    audio.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not read audio file"));
    };
    audio.src = url;
  });
}

interface AudioUploaderProps {
  onFileSelected: (blob: Blob) => void;
  disabled?: boolean;
}

export function AudioUploader({ onFileSelected, disabled }: AudioUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [validating, setValidating] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateAndSubmit = useCallback(
    async (file: File) => {
      setError(null);
      setFileName(null);

      if (!file.type.startsWith("audio/")) {
        setError("Please upload an audio file (mp3, wav, m4a, webm, etc.)");
        return;
      }

      if (file.size > 50 * 1024 * 1024) {
        setError("File is too large. Maximum size is 50MB.");
        return;
      }

      setValidating(true);
      try {
        const duration = await getAudioDuration(file);
        if (duration > MAX_DURATION_SECONDS) {
          const mins = Math.floor(duration / 60);
          const secs = Math.round(duration % 60);
          setError(
            `Audio is too long (${mins}:${secs.toString().padStart(2, "0")}). Maximum duration is 2 minutes.`
          );
          setValidating(false);
          return;
        }
      } catch {
        setError("Could not read audio duration. Please try another file.");
        setValidating(false);
        return;
      }
      setValidating(false);

      setFileName(file.name);
      onFileSelected(file);
    },
    [onFileSelected]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) validateAndSubmit(file);
    },
    [validateAndSubmit]
  );

  return (
    <div className="w-full max-w-md">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => !disabled && !validating && inputRef.current?.click()}
        className="flex cursor-pointer flex-col items-center gap-3 rounded-[var(--radius-xl)] border-2 border-dashed p-8 transition-all duration-160"
        style={{
          borderColor: isDragging
            ? "var(--color-accent-purple)"
            : "var(--color-border-primary)",
          background: isDragging
            ? "var(--color-bg-glass-light)"
            : "transparent",
          opacity: disabled || validating ? 0.4 : 1,
          pointerEvents: disabled || validating ? "none" : "auto",
        }}
      >
        <UploadIcon />
        <div className="text-center">
          <p className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
            {validating ? "Checking audio…" : fileName || "Drop an audio file here"}
          </p>
          <p className="mt-1 text-xs" style={{ color: "var(--color-text-tertiary)" }}>
            or click to browse (mp3, wav, m4a, webm — max 2 min)
          </p>
        </div>
      </div>

      {error && (
        <p className="mt-2 text-xs" style={{ color: "var(--color-text-error)" }}>
          {error}
        </p>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="audio/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) validateAndSubmit(file);
        }}
      />
    </div>
  );
}

function UploadIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-text-tertiary)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
