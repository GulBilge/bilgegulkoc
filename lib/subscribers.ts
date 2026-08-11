import { getStore } from "@netlify/blobs";

const STORE_NAME = "subscribers";

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export class InvalidEmailError extends Error {}

export async function checkAndRegisterSubscriber(rawEmail: string) {
  const email = normalizeEmail(rawEmail);
  if (!isValidEmail(email)) {
    throw new InvalidEmailError("Geçersiz e-posta adresi.");
  }

  const store = getStore(STORE_NAME);
  const existing = await store.get(email);
  if (existing) {
    return { alreadySubscribed: true };
  }

  await store.set(email, JSON.stringify({ subscribedAt: new Date().toISOString() }));
  return { alreadySubscribed: false };
}
