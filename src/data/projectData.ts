import projects from './projects.json'
import type { Project } from '../components/ProjectCard'

function resolveProjectImage(image: string | null) {
	if (!image) {
		return null
	}

	if (image.startsWith('http://') || image.startsWith('https://') || image.startsWith('/')) {
		return image
	}

	return new URL(image, import.meta.url).href
}

export const projectData = (projects as Project[]).map((project) => ({
	...project,
	image: resolveProjectImage(project.image),
}))
