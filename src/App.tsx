'use client';
import HeroSection from "./components/Sections/HeroSection/HeroSection";
import AboutSection from "./components/Sections/AboutSection/AboutSection";
import ProjectsSection from "./components/Sections/ProjectsSection/ProjectsSection";
import ContactSection from "./components/Sections/ContactSection/ContactSection";
import Background from "./components/Background/Background";


function App() {

  return (
    <>
      <Background />
      <article className="relative z-10 scroll-wrapper">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </article>
    </>
  );
}

export default App
