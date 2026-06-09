'use client';
import { ScrollAnimation } from '@/components/uilayouts/scroll-animation';
import './StyleHeroSection.css';

function HeroSection() {
  return (
    <section className="scroll-section h-screen flex flex-col items-center justify-center">
      <ScrollAnimation animation="fade-up" duration={1}>
        <span className="eyebrow hero-eyebrow">
        PORTFOLIO
        </span>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" duration={1} delay={0.5}>
        <h1 className="hero-title text-center">
          NAZAR HVOZD
        </h1>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" duration={1} delay={1}>
        <p className="hero-subtitle">
          DATA ANALYST | BI ANALYST | BUSINESS ANALYST
        </p>
      </ScrollAnimation>
    </section>
  );
}

export default HeroSection;