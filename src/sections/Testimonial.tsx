import { Icon } from "@/components/icons";

/** Featured client quote, sits directly beneath the logo banner. */
export const Testimonial = () => (
  <section className="testimonial">
    <div className="wrap">
      <div className="testimonial-in">
        <Icon name="quote" size={56} />
        <div>
          <blockquote>
            &quot;With spot-level, real-time pixel tracking and rigorous advanced
            attribution test design, I can make high-stakes decisions with low
            uncertainty.&quot;
          </blockquote>
          <cite>Paul Baumgarthuber, CMO, LaserAway</cite>
        </div>
      </div>
    </div>
  </section>
);
