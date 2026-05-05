import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { defaultTheme } from './defaultTheme'
import type { Theme } from '../types'

interface ThemeProviderProps {
  theme?: Partial<Theme>
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme = {}, children }) => {
  const mergedTheme = { ...defaultTheme, ...theme }
  return <StyledThemeProvider theme={mergedTheme}>{children}</StyledThemeProvider>
}

export default ThemeProvider
