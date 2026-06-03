/**
 * HubSpot lead submission via the Forms Submission API.
 *
 * Configure these two PUBLIC values (safe to expose — they appear in every
 * HubSpot embed code) as environment variables, e.g. in Vercel:
 *   NEXT_PUBLIC_HUBSPOT_PORTAL_ID   your HubSpot Hub/Portal ID (a number)
 *   NEXT_PUBLIC_HUBSPOT_FORM_GUID   the form's GUID
 *
 * If they are not set, submitLead resolves without sending (so the
 * confirmation UX still works in local/preview), and logs a warning.
 */

const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const FORM_GUID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID;

export type LeadInput = {
  name: string;
  company: string;
  email: string;
};

export async function submitLead({ name, company, email }: LeadInput): Promise<void> {
  if (!PORTAL_ID || !FORM_GUID) {
    console.warn(
      "[hubspot] NEXT_PUBLIC_HUBSPOT_PORTAL_ID / NEXT_PUBLIC_HUBSPOT_FORM_GUID not set — lead was not sent."
    );
    return;
  }

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
