'use client';
import { ScrollAnimation } from '../../uilayouts/scroll-animation';
import './styleAboutSection.css';

function AboutSection() {
  return (
    <section className="scroll-section min-h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-5 items-start ">
        <ScrollAnimation animation="fade-up" duration={1} as='h2'>
          <h2 className="section-title">ABOUT ME</h2>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" duration={1} delay={0.2}>
          <div className="section-box text-left description">

              Economics student focused on data analytics and business performance reporting. Builds SQL-
              based analyses and Power BI dashboards to transform structured data into decision-ready
              insights. Experience applying econometric and quantitative methods in academic and personal
              projects using Python, C#, and Excel. Comfortable translating analytical requirements into
              technical solutions and presenting results clearly to non-technical audiences.

          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
export default AboutSection;