const STORAGE_KEY = "compare-stt-upload-count";

export const REQUIRED_UPLOADS = 3;

export function getUploadCount(): number {
  if (typeof window === "undefined") return 0;
  return parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
}

export function incrementUploadCount(): number {
  const count = getUploadCount() + 1;
  localStorage.setItem(STORAGE_KEY, String(count));
  return count;
}
