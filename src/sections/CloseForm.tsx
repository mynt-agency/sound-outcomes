"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { Eyebrow } from "@/components/Eyebrow";
import { Waveform } from "@/components/Waveform";
import { Button } from "@/components/Button";
import { submitLead } from "@/lib/hubspot";

export const CloseForm = () => {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState({ name: "", company: "", email: "" });
  const set =
    (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setData((d) => ({ ...d, [k]: e.target.value }));

  return (
    <section className="sec close-sec" id="close">
      <div className="wrap">
        <div className="close-card">
          <div className="close-copy">
            <Eyebrow>Let&apos;s talk outcomes</Eyebrow>
            <h2>See what performance audio can do for your brand.</h2>
            <p className="lead">
              Tell us about your goals and current marketing mix. We&apos;ll come
              back with where audio fits, the upside we&apos;d expect, and exactly
              how we&apos;d measure it.
            </p>
            <ul className="close-list">
              <li>
                <Icon name="check" size={18} /> No long-term contracts
              </li>
              <li>
                <Icon name="check" size={18} /> No discovery fees
              </li>
              <li>
                <Icon name="check" size={18} /> A clear plan, within one business day
              </li>
            </ul>
            <div style={{ marginTop: 28 }}>
              <Waveform bars={13} height={40} />
            </div>
          </div>
          {sent ? (
            <div className="close-form hf-done">
              <span className="badge">
                <Icon name="check" size={14} /> Request received
              </span>
              <h3>We&apos;re on it.</h3>
              <p>
                A strategist will reach out within one business day with your audio
                plan and measurement scope.
              </p>
            </div>
          ) : (
            <form
              className="close-form"
              onSubmit={async (e) => {
                e.preventDefault();
                if (submitting) return;
                setSubmitting(true);
                setError(null);
                try {
                  await submitLead(data);
                  setSent(true);
                } catch {
                  setError(
                    "Something went wrong sending your request. Please try again, or email hello@soundoutcomes.com.",
                  );
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              <div className="hf-head">
                <span className="hf-tag">
                  <Icon name="clock" size={14} /> Free 30-min strategy call
                </span>
                <h3>Book your audio strategy call</h3>
              </div>
              <div className="field">
                <label>Full name</label>
                <input
                  type="text"
                  required
                  placeholder="Jordan Avery"
                  value={data.name}
                  onChange={set("name")}
                />
              </div>
              <div className="field">
                <label>Company</label>
                <input
                  type="text"
                  required
                  placeholder="Acme Brands"
                  value={data.company}
                  onChange={set("company")}
                />
              </div>
              <div className="field">
                <label>Work email</label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={data.email}
                  onChange={set("email")}
                />
              </div>
              <Button
                variant="primary"
                icon="arrow"
                type="submit"
                full
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Book your audio strategy call"}
              </Button>
              {error && (
                <p className="hf-error" role="alert">
                  {error}
                </p>
              )}
              <p className="hf-fine">
                We respond within one business day. Sound Outcomes is a performance
                audio agency, powered by Mynt Agency.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
