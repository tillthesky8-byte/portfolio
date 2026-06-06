import { useEffect, useMemo, useState } from 'react'
import { PortfolioPage } from './components/PortfolioPage'
import { ProjectDetailPage } from './components/ProjectDetailPage'
import { projectData } from './data/projectData'
import './App.css'

function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const activeProject = useMemo(
    () => projectData.find((project) => pathname === `/projects/${project.slug}`),
    [pathname],
  )

  const openProject = (slug: string) => {
    const nextPath = `/projects/${slug}`
    window.history.pushState({}, '', nextPath)
    setPathname(nextPath)
  }

  const goHome = () => {
    window.history.pushState({}, '', '/')
    setPathname('/')
  }

  if (activeProject) {
    return <ProjectDetailPage project={activeProject} onBack={goHome} />
  }

  return <PortfolioPage projects={projectData} onOpenProject={openProject} />
}

export default App
