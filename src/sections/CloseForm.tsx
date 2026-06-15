"use client";

import { Icon } from "@/components/icons";
import { Eyebrow } from "@/components/Eyebrow";
import { Waveform } from "@/components/Waveform";
import { Button } from "@/components/Button";
import { useLeadForm, BUDGET_OPTIONS } from "@/lib/useLeadForm";

export const CloseForm = () => {
  const { data, set, onSubmit, submitting, error } = useLeadForm();

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
          <form className="close-form" onSubmit={onSubmit}>
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
                <label>Role / Title</label>
                <input
                  type="text"
                  required
                  placeholder="Head of Growth"
                  value={data.jobtitle}
                  onChange={set("jobtitle")}
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
              <div className="field">
                <label>Monthly marketing budget</label>
                <select required value={data.budget} onChange={set("budget")}>
                  <option value="" disabled>
                    Select a range
                  </option>
                  {BUDGET_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              {/* Honeypot — hidden from humans; bots that fill it are silently rejected. */}
              <div className="hp-field" aria-hidden="true">
                <label>Website</label>
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={data.website}
                  onChange={set("website")}
                />
              </div>
              <Button variant="primary" icon="arrow" type="submit" full disabled={submitting}>
                {submitting ? "Sending…" : "Book your audio strategy call"}
              </Button>
              {error && <p className="hf-error">{error}</p>}
              <p className="hf-fine">
                We respond within one business day. Sound Outcomes is a performance
                audio agency, powered by Mynt Agency.
              </p>
            </form>
        </div>
      </div>
    </section>
  );
};
