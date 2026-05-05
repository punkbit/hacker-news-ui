# react-hn-reader

A beautiful, reusable React component for displaying Hacker News stories with parallax scrolling effects. Built with TypeScript and styled-components.

## Features

- ✨ **Parallax scrolling** - Beautiful 3D scroll effects
- 🎨 **Fully customizable** - Override themes or provide custom renderers
- 📦 **Zero-config** - Works out of the box with HN API
- 🔧 **TypeScript** - Full type safety
- ⚡ **ES Modules** - Modern, tree-shakeable
- 🎯 **Configurable** - Use any REST API or customize data fetching

## Installation

```bash
npm install react-hn-reader styled-components
# or
yarn add react-hn-reader styled-components
```

## Quick Start

```tsx
import React from 'react'
import { HackerNewsReader, ThemeProvider } from 'react-hn-reader'

function App() {
  return (
    <ThemeProvider>
      <HackerNewsReader />
    </ThemeProvider>
  )
}
```

## Usage with Custom Theme

```tsx
import { HackerNewsReader, ThemeProvider } from 'react-hn-reader'

const customTheme = {
  orange: '#ff4500',
  platinum: '#f0f0f0',
  onyx: '#1a1a1a'
}

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <HackerNewsReader 
        initialCount={50}
        enableLoadMore={true}
      />
    </ThemeProvider>
  )
}
```

## Advanced Usage

### Custom Story Renderer

```tsx
<HackerNewsReader
  renderStory={(story, index) => (
    <div key={story.id}>
      <h3>{story.title}</h3>
      <p>By: {story.by.id} | Score: {story.score}</p>
    </div>
  )}
/>
```

### Using a Different API

```tsx
<HackerNewsReader
  apiUrl="https://your-custom-api.com/v0"
  initialCount={20}
/>
```

### Handle Story Clicks

```tsx
<HackerNewsReader
  onStoryClick={(story) => {
    console.log('Clicked:', story.title)
    // Navigate, open modal, etc.
  }}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `apiUrl` | `string` | HN Firebase API | Base URL for story API |
| `initialCount` | `number` | `30` | Number of stories to load initially |
| `enableLoadMore` | `boolean` | `true` | Show "Load more" button |
| `onStoryClick` | `(story) => void` | - | Callback when story is clicked |
| `theme` | `Partial<Theme>` | - | Override default theme |
| `className` | `string` | - | CSS class for wrapper |
| `renderStory` | `(story, index) => ReactNode` | - | Custom story renderer |
| `renderLoading` | `() => ReactNode` | - | Custom loading state |
| `renderError` | `(error, retry) => ReactNode` | - | Custom error state |
| `renderLogo` | `() => ReactNode` | - | Custom logo component |

## Theme

The component uses styled-components theming. Available theme properties:

```typescript
interface Theme {
  orange: string      // Primary accent color
  vividTangelo: string
  platinum: string    // Secondary background
  gainsBoro: string
  onyx: string        // Text color
  sandyBrown: string
}
```

Default theme:
```typescript
{
  orange: '#ff6600',
  vividTangelo: '#F26722',
  platinum: '#E8E9EB',
  gainsBoro: '#E0DFD5',
  onyx: '#313638',
  sandyBrown: '#F09D51'
}
```

## Using the Hook Directly

For advanced use cases, you can use the `useStories` hook:

```tsx
import { useStories } from 'react-hn-reader'

function CustomNewsList() {
  const { stories, loading, error, fetchMore } = useStories({
    apiUrl: 'https://hacker-news.firebaseio.com/v0',
    initialCount: 30
  })
  
  // Build your own UI
}
```

## Peer Dependencies

- `react` >= 16.8.0
- `react-dom` >= 16.8.0
- `styled-components` >= 5.0.0

## License

MIT © Punkbit

## Contributing

Contributions welcome! Please read the [Contributing Guide](CONTRIBUTING.md).

## API Reference

### `HackerNewsReader`

Main component that renders the Hacker News feed with parallax scrolling.

### `ThemeProvider`

Wrapper component that provides theme context. Must wrap `HackerNewsReader` if using themes.

### `useStories`

Hook for fetching stories. Returns `{ loading, error, stories, fetchMore }`.

### Types

All TypeScript types are exported:

```typescript
import type { 
  HackerNewsReaderProps, 
  Story, 
  Theme,
  UseStoriesConfig 
} from 'react-hn-reader'
```
