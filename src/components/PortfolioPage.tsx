import heroImg from '../assets/hero.png'
import { highlights, profile } from '../data/siteContent'
import type { Project } from './ProjectCard'
import { ProjectCard } from './ProjectCard'

type PortfolioPageProps = {
  projects: Project[]
  onOpenProject: (slug: string) => void
}

export function PortfolioPage({ projects, onOpenProject }: PortfolioPageProps) {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="/">
          {profile.name}
        </a>
        <nav className="site-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="role-line">{profile.title}</p>
          <p className="lede">{profile.bio}</p>

          <div className="hero-highlights" aria-label="Highlights">
            {highlights.map((highlight) => (
              <span key={highlight} className="pill">
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <figure className="hero-visual">
          <img src={heroImg} alt="Abstract portfolio preview" />
        </figure>
      </section>


      <section id="projects" className="projects-section">
        <div className="section-heading">
          <p className="eyebrow">Selected projects</p>

        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={onOpenProject} />
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="eyebrow">Contact</p>
        </div>
        <p>{profile.contact}</p>
      </section>
    </main>
  )
}
