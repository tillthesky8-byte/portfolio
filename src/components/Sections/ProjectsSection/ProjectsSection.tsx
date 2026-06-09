'use client';
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { ScrollAnimation } from "../../uilayouts/scroll-animation";
import './styleProjectsSection.css';
import { projectsCards } from "@/data/projectsData";
function ProjectsSection() {
  return (
    <section className="scroll-section project-section ">

      <ScrollAnimation animation="fade-up" duration={1}>
        <h2 className="section-title" id="projects-section-title">PROJECTS</h2>
      </ScrollAnimation>

      <div className="projects-list">

        {projectsCards.map((project, index) => (
          <ProjectCard
            key={index}
            slug={project.slug}
            title={project.title}
            type={project.type}
            thumbnail={project.thumbnail}
            description={project.description}
            tags={project.tags}
            reversed={index % 2 === 1}
            delay={0}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;