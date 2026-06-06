import { createArtwork } from '../lib/createArtwork'

export type Project = {
  slug: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  accent: string
  secondary: string
  label: string
  image: string | null
}

type ProjectCardProps = {
  project: Project
  onOpen: (slug: string) => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const image = project.image ?? createArtwork(project.label, project.accent, project.secondary)

  return (
    <a
      className="project-card"
      href={`/projects/${project.slug}`}
      onClick={(event) => {
        event.preventDefault()
        onOpen(project.slug)
      }}
    >
      <img className="project-card__image" src={image} alt={project.title} />
      <div className="project-card__body">
        <p className="project-card__subtitle">{project.subtitle}</p>
        <h3>{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag" style={{ borderColor: project.accent }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
