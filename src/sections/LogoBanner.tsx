import { ClientLogo } from "@/components/ClientLogo";

const CLIENTS = [
  "Liquid Death",
  "LaserAway",
  "Oats Overnight",
  "Prenuvo",
  "Total Wine & More",
];

export const LogoBanner = () => (
  <section className="logo-banner">
    <div className="wrap">
      <p className="lb-label">
        Trusted by performance brands across the Mynt roster
      </p>
      <div className="lb-row">
        {CLIENTS.map((c) => (
          <ClientLogo key={c} name={c} />
        ))}
      </div>
    </div>
  </section>
);
