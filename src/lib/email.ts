/**
 * Business-email gate for the lead forms. Submissions from free/consumer
 * mailbox providers are rejected so the team only books qualified calls.
 */

export const FREE_EMAIL_DOMAINS = new Set<string>([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "ymail.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "aol.com",
  "hulu.com",
  "proton.me",
  "protonmail.com",
  "gmx.com",
  "mail.com",
]);

/** True only for a syntactically valid email whose domain is not a free provider. */
export function isBusinessEmail(email: string): boolean {
  const at = email.lastIndexOf("@");
  if (at <= 0 || at === email.length - 1) return false;
  const domain = email.slice(at + 1).trim().toLowerCase();
  if (!domain || !domain.includes(".")) return false;
  return !FREE_EMAIL_DOMAINS.has(domain);
}
