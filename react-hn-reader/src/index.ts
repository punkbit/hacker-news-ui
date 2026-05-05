// Main exports
export { default as HackerNewsReader } from './HackerNewsReader'
export { default as ThemeProvider } from './styles/ThemeProvider'

// Types
export type {
  HackerNewsReaderProps,
  Story,
  StoryData,
  Theme,
  UseStoriesConfig,
  UseStoriesReturn
} from './types'

// Hooks (optional - for advanced use cases)
export { useStories } from './hooks/useStories'

// Default theme
export { defaultTheme } from './styles/defaultTheme'
