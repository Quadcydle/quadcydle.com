import { Button, Highlight } from "../Homepage/button";
import { Hero, HeroTitle, HeroSubtitle } from "../Homepage/hero";
import { HeroImage } from "../Homepage/hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0"
      href="/"
      variant="secondary"
      size="small"
    >
      <span>Quadcydle 2024 Release – Engineered for Scalability</span>{" "}
      <Highlight>→</Highlight>
    </Button>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
    Elevating Your Business's
      <br className="hidden md:block" /> Online Presence
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
    we specialize in managing your digital assets, including websites, hosting, and mobile applications.
      <br className="hidden md:block" /> Our comprehensive services range from social media marketing and SEO to full-scale business development, ensuring your online presence is robust and effective.
    </HeroSubtitle>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="/"
      variant="primary"
      size="large"
    >
      <span>Get Started </span>
      <Highlight>
        <ChevronIcon />
      </Highlight>
    </Button>
    <HeroImage />
  </Hero>
);
