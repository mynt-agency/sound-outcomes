// HubSpot lead-capture submission helper.
//
// The hero and close forms keep their bespoke design and post to the
// HubSpot Forms Submissions API (v3) so leads land on the HubSpot form
// directly, without an iframe embed or a private access token.
//
// Portal ID and form GUID can be overridden per-environment via
// NEXT_PUBLIC_* env vars; the defaults point at the production form.
const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID ?? "46811795";
const FORM_GUID =
  process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID ??
  "e64b094b-3eec-42da-a82f-6e68aaa4848e";

const ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

export type LeadFields = {
  name: string;
  company: string;
  email: string;
};

// The HubSpot tracking script stores a visitor token in the `hubspotutk`
// cookie. Passing it through links the submission to the analytics session.
const readHutk = (): string | undefined => {
  if (typeof document === "undefined") return undefined;
  return document.cookie
    .split("; ")
    .find((c) => c.startsWith("hubspotutk="))
    ?.split("=")[1];
};

export async function submitLead({
  name,
  company,
  email,
}: LeadFields): Promise<void> {
  // The form collects a single "Full name"; HubSpot's default contact
  // properties are firstname/lastname, so split on the first space.
  const trimmedName = name.trim();
  const firstSpace = trimmedName.indexOf(" ");
  const firstname =
    firstSpace === -1 ? trimmedName : trimmedName.slice(0, firstSpace);
  const lastname = firstSpace === -1 ? "" : trimmedName.slice(firstSpace + 1);

  const fields = [
    { name: "firstname", value: firstname },
    { name: "lastname", value: lastname },
    { name: "company", value: company.trim() },
    { name: "email", value: email.trim() },
  ].filter((f) => f.value);

  const hutk = readHutk();

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields,
      context: {
        ...(hutk ? { hutk } : {}),
        pageUri: typeof window !== "undefined" ? window.location.href : undefined,
        pageName: typeof document !== "undefined" ? document.title : undefined,
      },
    }),
  });

  if (!res.ok) {
    let detail = "";
    try {
      const body = await res.json();
      detail = body?.message || body?.errors?.[0]?.message || "";
    } catch {
      // response had no JSON body
    }
    throw new Error(
      `HubSpot submission failed (${res.status})${detail ? `: ${detail}` : ""}`,
    );
  }
}
