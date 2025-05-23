export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
