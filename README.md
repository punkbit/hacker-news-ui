# react-hn-reader

A reusable React component for displaying Hacker News stories with parallax scrolling effects.

## Installation

```bash
npm install react-hn-reader styled-components
```

**Peer dependencies:** react >=16.8, react-dom >=16.8, styled-components >=5.0

## Quick Start

```tsx
import { HackerNewsReader, ThemeProvider } from 'react-hn-reader'

function App() {
  return (
    <ThemeProvider>
      <HackerNewsReader />
    </ThemeProvider>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `apiUrl` | `string` | HN Firebase API | Base URL for stories API |
| `initialCount` | `number` | 30 | Initial stories to load |
| `enableLoadMore` | `boolean` | true | Show load more button |
| `onStoryClick` | `(story) => void` | - | Click handler |
| `theme` | `object` | - | Override theme colors |
| `renderStory` | `(story, index) => ReactNode` | - | Custom story renderer |

## Usage Examples

### Custom Theme

```tsx
<ThemeProvider theme={{ orange: '#ff4500', onyx: '#1a1a1a' }}>
  <HackerNewsReader />
</ThemeProvider>
```

### Custom API

```tsx
<HackerNewsReader 
  apiUrl="https://your-api.com/v0"
  initialCount={50}
/>
```

### Handle Clicks

```tsx
<HackerNewsReader 
  onStoryClick={(story) => console.log(story.title)}
/>
```

## Development

```bash
npm install
npm run build    # Build package
npm run dev      # Development mode
```

## Publish

```bash
npm run build
npm publish
```

## License

MIT
