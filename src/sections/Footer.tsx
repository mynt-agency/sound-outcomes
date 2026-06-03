import { Logo } from "@/components/Logo";
import { ScrollLink } from "@/components/ScrollLink";

export const Footer = () => (
  <footer className="footer band-ink">
    <div className="wrap">
      <div className="footer-top">
        <div style={{ maxWidth: 320 }}>
          <Logo dark />
          <p
            style={{
              color: "var(--ink-300)",
              fontSize: 14,
              lineHeight: 1.55,
              marginTop: 16,
            }}
          >
            Audio advertising, engineered for outcomes, not impressions. A
            performance audio agency, powered by Mynt Agency.
          </p>
        </div>
        <div className="footer-cols">
          <div className="fcol">
            <h5>Channels</h5>
            <ScrollLink targetId="channels">Podcast</ScrollLink>
            <ScrollLink targetId="channels">Streaming audio</ScrollLink>
            <ScrollLink targetId="channels">AM/FM &amp; radio</ScrollLink>
          </div>
          <div className="fcol">
            <h5>Capabilities</h5>
            <ScrollLink targetId="attribution">Attribution</ScrollLink>
            <ScrollLink targetId="attribution">Media Mix Modeling</ScrollLink>
            <ScrollLink targetId="attribution">Incrementality testing</ScrollLink>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Sound Outcomes — a Mynt Agency brand. All rights reserved.</p>
        <p>soundoutcomes.com</p>
      </div>
    </div>
  </footer>
);
