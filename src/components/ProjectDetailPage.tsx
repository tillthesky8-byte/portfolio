import type { Project } from './ProjectCard'
import { createArtwork } from '../lib/createArtwork'
import { projectDetailsBySlug } from '../data/projectDetails'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')

type ProjectDetailPageProps = {
  project: Project
  onBack: () => void
}

export function ProjectDetailPage({ project, onBack }: ProjectDetailPageProps) {
  const image = project.image ?? createArtwork(project.label, project.accent, project.secondary)
  const detail = projectDetailsBySlug[project.slug]

  if (detail) {
    return (
      <main className="page-shell page-shell--detail">
        <header className="topbar">
          <a
            href={basePath || '/'}
            className="back-link"
            onClick={(event) => {
              event.preventDefault()
              onBack()
            }}
          >
            Back to portfolio
          </a>
        </header>

        <section className="detail-hero detail-hero--case-study">
          <div className="detail-copy">
            <p className="eyebrow">Case study</p>
            <h1>{project.title}</h1>
            <p className="role-line">{project.subtitle}</p>
            <p className="lede">{detail.overviewQuestion}</p>
            <p className="detail-summary">{detail.summary}</p>
          </div>

          <img className="detail-image" src={image} alt={project.title} />
        </section>
        {detail.readme ? (
          <section className="detail-section detail-readme">
            <div className="section-heading">
              <p className="eyebrow">Project README</p>
              <h2>Full project notes</h2>
            </div>

            <div className="detail-readme-body">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <ReactMarkdown remarkPlugins={[remarkGfm as unknown as any]}>{detail.readme}</ReactMarkdown>
            </div>
          </section>
        ) : (
          <>
            <section className="detail-stat-grid" aria-label="Project highlights">
              {detail.stats?.map((stat) => (
                <article key={stat.label} className="detail-stat-card">
                  <p className="detail-stat-label">{stat.label}</p>
                  <p className="detail-stat-value">{stat.value}</p>
                </article>
              ))}
            </section>

            <section className="detail-section">
              <div className="section-heading section-heading--detail">
                <p className="eyebrow">Methodology</p>
                <h2>How the index was built</h2>
              </div>

              <div className="detail-content-grid">
                {detail.methodology?.map((item) => (
                  <article key={item.title} className="detail-panel">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <div className="section-heading section-heading--detail">
                <p className="eyebrow">Key findings</p>
                <h2>What the analysis showed</h2>
              </div>

              <div className="detail-list-grid">
                {detail.findings?.map((finding) => (
                  <article key={finding} className="detail-panel detail-panel--finding">
                    <p>{finding}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <div className="section-heading section-heading--detail">
                <p className="eyebrow">Artifacts</p>
                <h2>Figures from the research</h2>
              </div>

              <div className="artifact-grid">
                {detail.artifacts?.map((artifact) => (
                  <figure key={artifact.caption} className="artifact-card">
                    <img src={artifact.src} alt={artifact.alt} />
                    <figcaption>{artifact.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>

            {detail.resources ? (
              <section className="detail-section">
                <div className="section-heading section-heading--detail">
                  <p className="eyebrow">Resources</p>
                  <h2>Source material and references</h2>
                </div>

                <div className="detail-content-grid">
                  {detail.resources.map((resource) => (
                    <article key={resource.label} className="detail-panel">
                      <h3>{resource.label}</h3>
                      <p>{resource.description}</p>
                      <a className="detail-resource-link" href={resource.href} target="_blank" rel="noreferrer">
                        Open resource
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </>
        )}
      </main>
    )
  }

  return (
    <main className="page-shell page-shell--detail">
      <header className="topbar">
        <a
          href="/"
          className="back-link"
          onClick={(event) => {
            event.preventDefault()
            onBack()
          }}
        >
          Back to portfolio
        </a>
      </header>

      <section className="detail-hero">
        <div className="detail-copy">
          <p className="eyebrow">Project overview</p>
          <h1>{project.title}</h1>
          <p className="role-line">{project.subtitle}</p>
          <p className="lede">
            This page is ready for a full case study later. For now, it acts as the destination
            for each project card so the navigation is already in place.
          </p>
        </div>

        <img className="detail-image" src={image} alt={project.title} />
      </section>

      <section className="detail-grid">
        <article>
          <h2>What this can include</h2>
          <p>Problem framing, the approach you took, the tools used, and the outcome.</p>
        </article>
        <article>
          <h2>Placeholder sections</h2>
          <p>Impact, screenshots, implementation notes, and a summary of your role.</p>
        </article>
      </section>
    </main>
  )
}
