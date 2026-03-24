let pendingBlob: Blob | null = null;

export function setPendingAudio(blob: Blob) {
  pendingBlob = blob;
}

export function consumePendingAudio(): Blob | null {
  const blob = pendingBlob;
  pendingBlob = null;
  return blob;
}
