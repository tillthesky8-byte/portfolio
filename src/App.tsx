import { useEffect, useMemo, useState } from 'react'
import { PortfolioPage } from './components/PortfolioPage'
import { ProjectDetailPage } from './components/ProjectDetailPage'
import { projectData } from './data/projectData'
import './App.css'

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')

function normalizePathname(pathname: string) {
  if (!basePath || basePath === '/') {
    return pathname
  }

  if (pathname.startsWith(basePath)) {
    return pathname.slice(basePath.length) || '/'
  }

  return pathname
}

function getCurrentRoute() {
  if (window.location.hash.startsWith('#!')) {
    return window.location.hash.slice(2) || '/'
  }

  return normalizePathname(window.location.pathname)
}

function toBasePath(pathname: string) {
  return `${basePath}${pathname}`
}

function App() {
  const [pathname, setPathname] = useState(() => getCurrentRoute())

  useEffect(() => {
    const handlePopState = () => {
      setPathname(getCurrentRoute())
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
    window.history.pushState({}, '', toBasePath(nextPath))
    setPathname(nextPath)
  }

  const goHome = () => {
    window.history.pushState({}, '', toBasePath('/'))
    setPathname('/')
  }

  if (activeProject) {
    return <ProjectDetailPage project={activeProject} onBack={goHome} />
  }

  return <PortfolioPage projects={projectData} onOpenProject={openProject} />
}

export default App
