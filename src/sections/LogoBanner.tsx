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
      <p className="lb-label">Trusted by industry leading brands</p>
      <div className="lb-row">
        {CLIENTS.map((c) => (
          <ClientLogo key={c} name={c} />
        ))}
      </div>
    </div>
  </section>
);
