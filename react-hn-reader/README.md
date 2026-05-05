# react-hn-reader

A beautiful, reusable React component for displaying Hacker News stories with parallax scrolling effects. Built with TypeScript and styled-components.

[![npm version](https://badge.fury.io/js/react-hn-reader.svg)](https://badge.fury.io/js/react-hn-reader)
[![license](https://img.shields.io/npm/l/react-hn-reader.svg)](https://github.com/punkbit/react-hn-reader/blob/main/LICENSE)

## Features

- ✨ **Parallax scrolling** - Beautiful 3D scroll effects with three viewport layers
- 🎨 **Fully customizable** - Override themes or provide custom renderers
- 📦 **Zero-config** - Works out of the box with Hacker News API
- 🔧 **TypeScript** - Full type safety with exported types
- ⚡ **ES Modules** - Modern, tree-shakeable ES2020 output
- 🎯 **Configurable** - Use any REST API or customize data fetching
- 🪝 **Custom hook** - `useStories` hook for advanced use cases
- 🎭 **Flexible rendering** - Override any part of the UI

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage Examples](#usage-examples)
  - [Basic Usage](#basic-usage)
  - [With Custom Theme](#with-custom-theme)
  - [With Custom API](#with-custom-api)
  - [Custom Story Rendering](#custom-story-rendering)
  - [Custom Loading State](#custom-loading-state)
  - [Custom Error State](#custom-error-state)
  - [Handling Click Events](#handling-click-events)
- [API Reference](#api-reference)
  - [HackerNewsReader Props](#hackernewsreader-props)
  - [Theme](#theme)
  - [useStories Hook](#usestories-hook)
  - [TypeScript Types](#typescript-types)
- [Development](#development)
- [Publishing](#publishing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Installation

```bash
npm install react-hn-reader styled-components
# or
yarn add react-hn-reader styled-components
# or
pnpm add react-hn-reader styled-components
```

### Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "react": ">=16.8.0",
  "react-dom": ">=16.8.0",
  "styled-components": ">=5.0.0"
}
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

export default App
```

## Usage Examples

### Basic Usage

The simplest usage with default configuration:

```tsx
import { HackerNewsReader, ThemeProvider } from 'react-hn-reader'

function App() {
  return (
    <ThemeProvider>
      <HackerNewsReader 
        initialCount={30}
        enableLoadMore={true}
      />
    </ThemeProvider>
  )
}
```

### With Custom Theme

Customize the color scheme to match your application:

```tsx
import { HackerNewsReader, ThemeProvider } from 'react-hn-reader'

const customTheme = {
  orange: '#ff4500',
  platinum: '#f0f0f0',
  onyx: '#1a1a1a',
  sandyBrown: '#f4a460'
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

### With Custom API

Use your own API endpoint instead of Hacker News:

```tsx
<HackerNewsReader
  apiUrl="https://your-custom-api.com/v0"
  initialCount={20}
  enableLoadMore={true}
/>
```

Your API should provide:
- `GET /newstories.json` - Returns array of story IDs
- `GET /item/{id}.json` - Returns story object with `id`, `title`, `url`, `time`, `score`, `by`

### Custom Story Rendering

Completely customize how stories are rendered:

```tsx
<HackerNewsReader
  renderStory={(story, index) => (
    <div 
      key={story.id}
      style={{ 
        padding: '1rem', 
        borderBottom: '1px solid #eee',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div>
        <h3 style={{ margin: 0 }}>{story.title}</h3>
        <p style={{ margin: '0.5rem 0 0', color: '#666' }}>
          By: {story.by.id} | Score: {story.score}
        </p>
      </div>
      <a 
        href={story.url} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: '#ff6600' }}
      >
        Read →
      </a>
    </div>
  )}
/>
```

### Custom Loading State

Override the default loading spinner:

```tsx
<HackerNewsReader
  renderLoading={() => (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      height: '100vh'
    }}>
      <div>Loading amazing stories...</div>
    </div>
  )}
/>
```

### Custom Error State

Customize error handling and retry functionality:

```tsx
<HackerNewsReader
  renderError={(error, retry) => (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      backgroundColor: '#fee',
      borderRadius: '8px'
    }}>
      <h2>Oops! Something went wrong</h2>
      <p>{error.message}</p>
      <button 
        onClick={retry}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#ff6600',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Try Again
      </button>
    </div>
  )}
/>
```

### Custom Logo

Replace the default logo with your own:

```tsx
<HackerNewsReader
  renderLogo={() => (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <img 
        src="/my-logo.svg" 
        alt="My Logo" 
        style={{ width: '200px' }} 
      />
    </div>
  )}
/>
```

### Handling Click Events

Add custom behavior when stories are clicked:

```tsx
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  
  return (
    <HackerNewsReader
      onStoryClick={(story) => {
        console.log('Clicked story:', story)
        // Option 1: Navigate to detail page
        navigate(`/story/${story.id}`)
        
        // Option 2: Open modal
        // openModal(story)
        
        // Option 3: Track analytics
        // analytics.track('story_click', { id: story.id })
      }}
    />
  )
}
```

### Complete Customization Example

All customization options combined:

```tsx
import { HackerNewsReader, ThemeProvider, useStories } from 'react-hn-reader'

const customTheme = {
  orange: '#e65100',
  platinum: '#fafafa',
  onyx: '#212121'
}

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <HackerNewsReader
        apiUrl="https://hacker-news.firebaseio.com/v0"
        initialCount={30}
        enableLoadMore={true}
        className="my-custom-class"
        onStoryClick={(story) => console.log('Clicked:', story.title)}
        renderStory={(story, index) => (
          <CustomStoryCard key={story.id} story={story} index={index} />
        )}
        renderLoading={() => <CustomSpinner />}
        renderError={(error, retry) => (
          <CustomError error={error} onRetry={retry} />
        )}
        renderLogo={() => <CustomLogo />}
      />
    </ThemeProvider>
  )
}
```

## API Reference

### HackerNewsReader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `apiUrl` | `string` | `'https://hacker-news.firebaseio.com/v0'` | Base URL for the stories API |
| `initialCount` | `number` | `30` | Number of stories to load initially |
| `enableLoadMore` | `boolean` | `true` | Whether to show the "Load more" button |
| `onStoryClick` | `(story: StoryData) => void` | `undefined` | Callback fired when a story is clicked |
| `theme` | `Partial<Theme>` | `undefined` | Override default theme colors |
| `className` | `string` | `undefined` | CSS class name applied to the wrapper element |
| `renderStory` | `(story: StoryData, index: number) => ReactNode` | `undefined` | Custom story renderer function |
| `renderLoading` | `() => ReactNode` | `undefined` | Custom loading state renderer |
| `renderError` | `(error: Error, retry: () => void) => ReactNode` | `undefined` | Custom error state renderer |
| `renderLogo` | `() => ReactNode` | `undefined` | Custom logo renderer |

### Theme

The component uses styled-components for theming. The theme object contains color values used throughout the component.

#### Default Theme

```typescript
{
  orange: '#ff6600',        // Primary accent color (buttons, links)
  vividTangelo: '#F26722',  // Secondary orange
  platinum: '#E8E9EB',      // Light backgrounds
  gainsBoro: '#E0DFD5',     // Neutral backgrounds
  onyx: '#313638',          // Primary text color
  sandyBrown: '#F09D51'     // Accent color
}
```

#### Theme Interface

```typescript
interface Theme {
  orange?: string
  vividTangelo?: string
  platinum?: string
  gainsBoro?: string
  onyx?: string
  sandyBrown?: string
  [key: string]: any  // Allow additional custom properties
}
```

#### Usage with ThemeProvider

```tsx
import { ThemeProvider, HackerNewsReader } from 'react-hn-reader'

const darkTheme = {
  orange: '#ff8844',
  onyx: '#ffffff',
  platinum: '#333333'
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <HackerNewsReader />
    </ThemeProvider>
  )
}
```

### useStories Hook

For advanced use cases, you can use the data fetching hook directly to build your own UI.

#### Hook Signature

```typescript
function useStories(config?: UseStoriesConfig): UseStoriesReturn
```

#### Configuration

```typescript
interface UseStoriesConfig {
  apiUrl?: string        // Default: 'https://hacker-news.firebaseio.com/v0'
  initialCount?: number  // Default: 30
}
```

#### Return Value

```typescript
interface UseStoriesReturn {
  loading: boolean           // True while fetching stories
  error: Error | null        // Error object if fetch failed
  stories: StoryData[]      // Array of loaded stories
  fetchMore: () => void     // Function to load more stories
}
```

#### Story Data Structure

```typescript
interface StoryData {
  id: string
  title: string
  url: string
  time: number        // Unix timestamp
  score: number       // Vote count
  by: {
    id: string       // Author username
  }
  __typename?: string
}
```

#### Hook Usage Example

```tsx
import { useStories } from 'react-hn-reader'

function CustomNewsList() {
  const { stories, loading, error, fetchMore } = useStories({
    apiUrl: 'https://hacker-news.firebaseio.com/v0',
    initialCount: 30
  })

  if (loading && stories.length === 0) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      {stories.map(story => (
        <article key={story.id}>
          <h2>{story.title}</h2>
          <p>By {story.by.id} | {story.score} points</p>
        </article>
      ))}
      <button onClick={fetchMore}>Load More</button>
    </div>
  )
}
```

### TypeScript Types

All TypeScript types are exported and can be imported for use in your application:

```typescript
import type { 
  HackerNewsReaderProps,
  StoryData,
  Story,
  Theme,
  UseStoriesConfig,
  UseStoriesReturn
} from 'react-hn-reader'
```

#### HackerNewsReaderProps

```typescript
interface HackerNewsReaderProps {
  apiUrl?: string
  initialCount?: number
  enableLoadMore?: boolean
  onStoryClick?: (story: StoryData) => void
  theme?: Partial<Theme>
  className?: string
  renderStory?: (story: StoryData, index: number) => React.ReactNode
  renderLoading?: () => React.ReactNode
  renderError?: (error: Error, retry: () => void) => React.ReactNode
  renderLogo?: () => React.ReactNode
}
```

#### Story / StoryData

```typescript
interface StoryData {
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
```

## Development

To set up the package for development:

```bash
# Navigate to the package directory
cd react-hn-reader

# Install dependencies
npm install

# Start development mode with HMR
npm run dev

# Build the package
npm run build

# Preview the production build
npm run preview
```

### Development Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run prepublishOnly` | Runs automatically before publishing |

### File Structure

```
react-hn-reader/
├── package.json              # Package configuration
├── vite.config.ts            # Vite build configuration
├── tsconfig.json             # TypeScript configuration
├── README.md                 # Documentation
├── src/
│   ├── index.ts              # Public API exports
│   ├── HackerNewsReader.tsx  # Main component
│   ├── components/           # UI sub-components
│   │   ├── StoryCard.tsx
│   │   ├── LoadingState.tsx
│   │   ├── ErrorState.tsx
│   │   ├── CtaButton.tsx
│   │   └── Logo.tsx
│   ├── hooks/
│   │   └── useStories.ts     # Data fetching hook
│   ├── styles/
│   │   ├── defaultTheme.ts
│   │   └── ThemeProvider.tsx
│   └── types/
│       └── index.ts          # TypeScript definitions
└── dist/                     # Compiled output (generated by build)
    ├── react-hn-reader.es.js
    └── index.d.ts
```

## Publishing

### Before Publishing

1. Update version in `package.json`:
```json
{
  "version": "1.0.0"
}
```

2. Ensure all files are committed:
```bash
git add .
git commit -m "chore: prepare for v1.0.0 release"
```

3. Build the package:
```bash
npm run build
```

### Publishing to NPM

```bash
# Login to NPM (first time only)
npm login

# Publish the package
npm publish

# Or publish as public (if scoped package)
npm publish --access public
```

### Publishing to a Private Registry

```bash
# Set registry URL
npm config set registry https://your-private-registry.com

# Publish
npm publish
```

### Using Without Publishing

You can also use the package locally without publishing:

**Option 1: Local file path**
```json
// In your project's package.json
{
  "dependencies": {
    "react-hn-reader": "file:../path/to/react-hn-reader"
  }
}
```

**Option 2: npm link**
```bash
# In react-hn-reader directory
npm link

# In your project directory
npm link react-hn-reader
```

## Troubleshooting

### Common Issues

#### "Cannot find module 'react-hn-reader'"

Make sure you've installed the package and its peer dependencies:

```bash
npm install react-hn-reader react react-dom styled-components
```

#### Styled-components theme not applied

Ensure you're wrapping the component with `ThemeProvider`:

```tsx
import { ThemeProvider, HackerNewsReader } from 'react-hn-reader'

// ❌ Wrong
<HackerNewsReader />

// ✅ Correct
<ThemeProvider>
  <HackerNewsReader />
</ThemeProvider>
```

#### TypeScript errors with custom renderers

Make sure to type your custom renderer functions:

```tsx
import type { StoryData } from 'react-hn-reader'

<HackerNewsReader
  renderStory={(story: StoryData, index: number) => (
    <div>{story.title}</div>
  )}
/>
```

#### Styles not appearing

The component uses Google Fonts (Bitter, Nanum Gothic, Work Sans). Ensure your app has access to these fonts or override the styles.

#### "window is not defined" error

This component requires a browser environment. If using Next.js or server-side rendering, dynamically import the component:

```tsx
import dynamic from 'next/dynamic'

const HackerNewsReader = dynamic(
  () => import('react-hn-reader').then(mod => mod.HackerNewsReader),
  { ssr: false }
)
```

### Getting Help

- **GitHub Issues**: [github.com/punkbit/react-hn-reader/issues](https://github.com/punkbit/react-hn-reader/issues)
- **Documentation**: This README
- **Examples**: Check the `/examples` directory in the repository

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13.1+
- Edge 80+

Requires browsers that support:
- ES2020
- CSS Custom Properties
- CSS Transforms 3D
- Fetch API

## License

MIT © [Punkbit](https://punkbit.com)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Credits

Created by [Punkbit](https://punkbit.com)

Data provided by the [Hacker News API](https://github.com/HackerNews/API)

---

**Happy coding!** 🚀
