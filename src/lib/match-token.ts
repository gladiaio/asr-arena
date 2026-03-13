import crypto from "crypto";

const getSigningKey = (() => {
  let key: Buffer | null = null;
  return () => {
    if (!key) {
      key = crypto
        .createHash("sha256")
        .update(process.env.DATABASE_URL || "dev-fallback-key")
        .digest();
    }
    return key;
  };
})();

export function signMatchToken(
  sessionId: string,
  providerAId: string,
  providerBId: string
): string {
  const payload = `${sessionId}.${providerAId}.${providerBId}`;
  const signature = crypto
    .createHmac("sha256", getSigningKey())
    .update(payload)
    .digest("base64url");
  return `${payload}.${signature}`;
}

export function verifyMatchToken(
  token: string
): { sessionId: string; providerAId: string; providerBId: string } | null {
  const parts = token.split(".");
  if (parts.length !== 4) return null;

  const [sessionId, providerAId, providerBId, signature] = parts;
  const payload = `${sessionId}.${providerAId}.${providerBId}`;
  const expected = crypto
    .createHmac("sha256", getSigningKey())
    .update(payload)
    .digest("base64url");

  if (signature !== expected) return null;

  return { sessionId, providerAId, providerBId };
}
