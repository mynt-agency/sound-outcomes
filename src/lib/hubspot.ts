/**
 * HubSpot lead submission via the Forms Submission API.
 *
 * Portal ID and Form GUID are PUBLIC values (they appear in any HubSpot embed
 * code), so they're safe to ship in client code. They're hardcoded below, but
 * can be overridden per-environment with NEXT_PUBLIC_HUBSPOT_PORTAL_ID /
 * NEXT_PUBLIC_HUBSPOT_FORM_GUID if you ever point the forms elsewhere.
 */

const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "46811795";
const FORM_GUID =
  process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID ||
  "e64b094b-3eec-42da-a82f-6e68aaa4848e";

export type LeadInput = {
  name: string;
  company: string;
  email: string;
  /** HubSpot `jobtitle` */
  jobtitle: string;
  /** HubSpot `monthly_budget__projected_` (must be one of that property's option values) */
  budget: string;
};

export async function submitLead({
  name,
  company,
  email,
  jobtitle,
  budget,
}: LeadInput): Promise<void> {
  // HubSpot's default contact has firstname/lastname; split the single name field.
  const trimmed = name.trim();
  const gap = trimmed.indexOf(" ");
  const firstname = gap === -1 ? trimmed : trimmed.slice(0, gap);
  const lastname = gap === -1 ? "" : trimmed.slice(gap + 1).trim();

  const payload = {
    fields: [
      { name: "email", value: email },
      { name: "firstname", value: firstname },
      { name: "lastname", value: lastname },
      { name: "company", value: company },
      { name: "jobtitle", value: jobtitle },
      { name: "monthly_budget__projected_", value: budget },
    ],
    context: {
      pageUri: typeof window !== "undefined" ? window.location.href : undefined,
      pageName: typeof document !== "undefined" ? document.title : undefined,
    },
  };

  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`HubSpot submission failed (${res.status}): ${detail}`);
  }
}
