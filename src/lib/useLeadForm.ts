"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { submitLead } from "@/lib/hubspot";
import { isBusinessEmail } from "@/lib/email";

export type LeadData = {
  name: string;
  company: string;
  jobtitle: string;
  email: string;
  budget: string;
  /** Honeypot — must stay empty for humans; bots tend to fill it. */
  website: string;
};

const EMPTY: LeadData = {
  name: "",
  company: "",
  jobtitle: "",
  email: "",
  budget: "",
  website: "",
};

export const WORK_EMAIL_MESSAGE =
  "Please use your work email so our team can prepare for your call.";

/** Values map to the HubSpot `monthly_budget__projected_` property's options. */
export const BUDGET_OPTIONS: { value: string; label: string }[] = [
  { value: "$20,000 - $50,000", label: "$20K–$50K" },
  { value: "$50,000 - $100,000", label: "$50K–$100K" },
  { value: "$100,000 +", label: "$100K+" },
];

/**
 * Shared logic for the hero and closing lead forms: field state, the honeypot
 * + business-email qualification gate, the HubSpot submit, and the thank-you
 * redirect. Blocked or honeypot-tripped submissions never redirect, so the
 * conversion pixels on /thankyou never fire for them.
 */
export function useLeadForm() {
  const router = useRouter();
  const [data, setData] = useState<LeadData>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set =
    (k: keyof LeadData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setData((d) => ({ ...d, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot tripped → silently reject: no submit, no redirect, no error shown.
    if (data.website.trim() !== "") return;

    if (!isBusinessEmail(data.email)) {
      setError(WORK_EMAIL_MESSAGE);
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      await submitLead({
        name: data.name,
        company: data.company,
        email: data.email,
        jobtitle: data.jobtitle,
        budget: data.budget,
      });
      router.push("/thankyou");
    } catch {
      setError("Something went wrong. Please try again, or email us directly.");
      setSubmitting(false);
    }
  };

  return { data, set, onSubmit, submitting, error };
}
