"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { submitLead } from "@/lib/hubspot";

export type LeadData = {
  name: string;
  company: string;
  email: string;
  /** Honeypot — must stay empty for humans; bots tend to fill it. */
  website: string;
};

const EMPTY: LeadData = {
  name: "",
  company: "",
  email: "",
  website: "",
};

/**
 * Shared logic for the hero and closing lead forms: field state, the honeypot
 * spam gate, the HubSpot submit, and the thank-you redirect. Honeypot-tripped
 * submissions never redirect, so the conversion pixels on /thankyou never fire
 * for them.
 */
export function useLeadForm() {
  const router = useRouter();
  const [data, setData] = useState<LeadData>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set =
    (k: keyof LeadData) =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setData((d) => ({ ...d, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot tripped → silently reject: no submit, no redirect, no error shown.
    if (data.website.trim() !== "") return;

    setSubmitting(true);
    setError(null);
    try {
      await submitLead({
        name: data.name,
        company: data.company,
        email: data.email,
      });
      router.push("/thankyou");
    } catch {
      setError("Something went wrong. Please try again, or email us directly.");
      setSubmitting(false);
    }
  };

  return { data, set, onSubmit, submitting, error };
}
