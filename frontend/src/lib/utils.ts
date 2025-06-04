import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const API_BASE_URL = "https://backend-service-production-3bc1.up.railway.app";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function addNewsletterSubscriber(email: string) {
  const res = await fetch(`${API_BASE_URL}/api/newsletter/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ email })
  });
  if (!res.ok) throw new Error('Failed to subscribe');
  return res.text();
}
