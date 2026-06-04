"use client";

import { useState } from "react";
import { Icon } from "./icons";
import { Button } from "./Button";
import { Waveform } from "./Waveform";

type Props = {
  heading?: string;
  cta?: string;
  compact?: boolean;
};

/**
 * Lead-capture / account-creation form. Marketing-site only: renders a
 * client-side confirmation on submit. Wire to your CRM/auth when ready.
 */
export const SignupForm = ({
  heading = "Create your free account",
  cta = "Start advertising",
  compact = false,
}: Props) => {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({ name: "", company: "", email: "", budget: "$250 – $1,000" });
  const set =
    (k: keyof typeof data) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setData((d) => ({ ...d, [k]: e.target.value }));

  if (sent) {
    return (
      <div className="signup-card">
        <div className="form-done">
          <span className="badge signal">
            <Icon name="check" size={14} /> You&apos;re in
          </span>
          <h3>Account request received.</h3>
          <p>
            Check your inbox, we&apos;ll send a link to finish setting up and
            launch your first campaign in minutes.
          </p>
          <div style={{ marginTop: 18, display: "flex", justifyContent: "center" }}>
            <Waveform bars={13} height={34} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      className="signup-card"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <h3>{heading}</h3>
      <p className="muted" style={{ marginBottom: 20, fontSize: "var(--text-sm)" }}>
        No contracts, no minimums beyond your campaign budget. Launch in minutes.
      </p>

      <div className="field">
        <label>Full name</label>
        <input type="text" required placeholder="Jordan Avery" value={data.name} onChange={set("name")} />
      </div>
      <div className="field">
        <label>Business name</label>
        <input type="text" required placeholder="Acme Brands" value={data.company} onChange={set("company")} />
      </div>
      <div className="field">
        <label>Work email</label>
        <input type="email" required placeholder="you@company.com" value={data.email} onChange={set("email")} />
      </div>
      {!compact && (
        <div className="field">
          <label>Estimated monthly budget</label>
          <select value={data.budget} onChange={set("budget")}>
            <option>$250 – $1,000</option>
            <option>$1,000 – $5,000</option>
            <option>$5,000 – $25,000</option>
            <option>$25,000+</option>
          </select>
        </div>
      )}

      <Button variant="primary" icon="arrow" type="submit" full>
        {cta}
      </Button>
      <p className="fine">
        By continuing you agree to our terms. Your first campaign can launch for
        as little as $250.
      </p>
    </form>
  );
};
