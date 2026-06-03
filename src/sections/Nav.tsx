import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { ScrollLink } from "@/components/ScrollLink";

export const Nav = () => (
  <nav className="nav">
    <div className="wrap nav-in">
      <Logo dark />
      <div className="nav-links">
        <ScrollLink targetId="channels">Channels</ScrollLink>
        <ScrollLink targetId="attribution">Attribution</ScrollLink>
        <ScrollLink targetId="results">Results</ScrollLink>
      </div>
      <div className="nav-cta">
        <Button variant="primary" icon="arrow" as="a" href="#book">
          Book a strategy call
        </Button>
      </div>
    </div>
  </nav>
);
