import { createGlobalStyle } from 'styled-components'

export const themeConf = {
  orange: '#ff6600',
  vividTangelo: '#F26722',
  platinum: '#E8E9EB',
  gainsBoro: '#E0DFD5',
  onyx: '#313638',
  sandyBrown: '#F09D51'
}

export const DefaultStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Bitter|Nanum+Gothic|Work+Sans&display=swap');

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
