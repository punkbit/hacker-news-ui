export interface Story {
  id: string
  title: string
  url: string
  time: number
  score: number
  by: {
    id: string
  }
}

export interface StoryData {
  id: string
  title: string
  url: string
  time: number
  score: number
  by: {
    id: string
  }
  __typename?: string
}

export interface Theme {
  orange?: string
  vividTangelo?: string
  platinum?: string
  gainsBoro?: string
  onyx?: string
  sandyBrown?: string
  [key: string]: any
}

export interface UseStoriesConfig {
  apiUrl?: string
  initialCount?: number
  endpoint?: string
}

export interface UseStoriesReturn {
  loading: boolean
  error: Error | null
  stories: StoryData[]
  fetchMore: () => void
}

export interface HackerNewsReaderProps {
  // Data source configuration
  apiUrl?: string
  initialCount?: number
  
  // Appearance
  theme?: Partial<Theme>
  className?: string
  
  // Behavior
  enableLoadMore?: boolean
  onStoryClick?: (story: StoryData) => void
  
  // Custom rendering (optional)
  renderStory?: (story: StoryData, index: number) => React.ReactNode
  renderLoading?: () => React.ReactNode
  renderError?: (error: Error, retry: () => void) => React.ReactNode
  renderLogo?: () => React.ReactNode
}
