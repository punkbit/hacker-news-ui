import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { themeConf, DefaultStyles } from './styled'
import Home from './Container/Home'
import About from './Container/About'

const App = () => {
  return (
    <ThemeProvider theme={themeConf}>
      <DefaultStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
