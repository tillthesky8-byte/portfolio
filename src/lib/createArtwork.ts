export function createArtwork(label: string, accent: string, secondary: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${accent}" />
          <stop offset="100%" stop-color="${secondary}" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#050505" flood-opacity="0.22" />
        </filter>
      </defs>
      <rect width="1200" height="800" rx="64" fill="url(#bg)" />
      <circle cx="180" cy="160" r="104" fill="#ffffff" fill-opacity="0.16" />
      <circle cx="1020" cy="180" r="160" fill="#ffffff" fill-opacity="0.1" />
      <rect x="120" y="470" width="960" height="160" rx="36" fill="#ffffff" fill-opacity="0.12" filter="url(#shadow)" />
      <rect x="160" y="518" width="420" height="24" rx="12" fill="#ffffff" fill-opacity="0.75" />
      <rect x="160" y="564" width="300" height="18" rx="9" fill="#ffffff" fill-opacity="0.48" />
      <rect x="760" y="516" width="210" height="74" rx="26" fill="#ffffff" fill-opacity="0.2" stroke="#ffffff" stroke-opacity="0.5" />
      <text x="160" y="274" fill="#ffffff" fill-opacity="0.96" font-size="92" font-family="Georgia, serif" font-weight="700">${label}</text>
      <text x="160" y="336" fill="#ffffff" fill-opacity="0.8" font-size="34" font-family="Arial, sans-serif">Project visual placeholder</text>
    </svg>
  `

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}
