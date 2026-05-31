import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateWhatsAppLink(
  phone: string,
  message: string,
  params: Record<string, string>
): string {
  let finalMessage = message;
  Object.entries(params).forEach(([key, value]) => {
    finalMessage = finalMessage.replace(`{${key}}`, value);
  });
  const encoded = encodeURIComponent(finalMessage);
  return `https://wa.me/${phone}?text=${encoded}`;
}
