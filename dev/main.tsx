import React from 'react'
import { createRoot } from 'react-dom/client'
import { HackerNewsReader, ThemeProvider, DefaultStyles } from '../src'

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(
    <ThemeProvider>
      <DefaultStyles />
      <HackerNewsReader />
    </ThemeProvider>
  )
}
