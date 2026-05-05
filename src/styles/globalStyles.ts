import { createGlobalStyle } from 'styled-components'

// Google Fonts URL
const GOOGLE_FONTS_URL = 'https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Nanum+Gothic:wght@400;700&family=Work+Sans:wght@400;700&display=swap'

// Track if fonts are already loaded
let fontsLoaded = false

/**
 * Dynamically load Google Fonts by injecting a link tag into document head
 */
export const loadFonts = (): void => {
  if (fontsLoaded || typeof document === 'undefined') {
    return
  }

  // Check if already exists
  const existingLink = document.querySelector('link[data-react-hn-reader-fonts]')
  if (existingLink) {
    fontsLoaded = true
    return
  }

  // Add preconnect for performance
  const preconnect1 = document.createElement('link')
  preconnect1.rel = 'preconnect'
  preconnect1.href = 'https://fonts.googleapis.com'
  document.head.appendChild(preconnect1)

  const preconnect2 = document.createElement('link')
  preconnect2.rel = 'preconnect'
  preconnect2.href = 'https://fonts.gstatic.com'
  preconnect2.crossOrigin = 'anonymous'
  document.head.appendChild(preconnect2)

  // Add fonts link
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = GOOGLE_FONTS_URL
  link.setAttribute('data-react-hn-reader-fonts', 'true')
  document.head.appendChild(link)

  fontsLoaded = true
}

export const themeConf = {
  orange: '#ff6600',
  vividTangelo: '#F26722',
  platinum: '#E8E9EB',
  gainsBoro: '#E0DFD5',
  onyx: '#313638',
  sandyBrown: '#F09D51'
}

export const DefaultStyles = createGlobalStyle`
  * {
    text-decoration: none;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
  body, html {
    width: 100%;
    height: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 1.4;
    background: white;
    font-family: 'Bitter', serif;
  }
  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Work Sans', sans-serif;
    font-weight: bold;
  }
  p, li, div, a {
    font-family: 'Bitter', serif;
  }
  *:focus {
    outline: none;
  }
`
