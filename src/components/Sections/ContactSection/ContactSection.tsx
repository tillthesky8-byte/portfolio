'use client';
import { ScrollAnimation } from "../../uilayouts/scroll-animation";
import './styleContactSection.css';

function ContactSection() {
  return (
    <section className="scroll-section h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-start gap-5">
        <ScrollAnimation animation="fade-up" duration={1}>
          <h2 className="section-title">CONTACT</h2>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" duration={1} delay={0.2}>
          <div className="text-left description">
            <span className="text-gray">Feel free to reach out to me via email: </span>
            <p className="font-bold">gvozdnazar61@gmail.com</p>

          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default ContactSection;