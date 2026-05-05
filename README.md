# react-hn-reader

A reusable React component for displaying Hacker News stories with beautiful parallax scrolling effects.

## Installation

```bash
npm install react-hn-reader styled-components
```

**Peer dependencies:** react >=16.8, react-dom >=16.8, styled-components >=5.0

## Quick Start

**Important:** You must include `DefaultStyles` for proper typography and styling:

```tsx
import { HackerNewsReader, ThemeProvider, DefaultStyles } from 'react-hn-reader'

function App() {
  return (
    <ThemeProvider>
      <DefaultStyles />
      <HackerNewsReader />
    </ThemeProvider>
  )
}
```

## Features

- ✨ **Parallax scrolling** - 3D depth effect with three viewport layers
- 🖱️ **Scroll indicator** - Animated mouse icon in top-right (fades on scroll)
- 🖤 **Fixed black logo** - Appears at bottom-right when scrolling down
- ➡️ **Arrow icons** - Each story displays an arrow-out icon
- 🎨 **Customizable themes** - Override all colors via ThemeProvider
- 🔧 **TypeScript** - Full type support

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
  <DefaultStyles />
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

## Requirements

**Fonts:** The component uses Google Fonts (loaded automatically):
- 'Bitter' - Primary text font
- 'Work Sans' - Headings
- 'Nanum Gothic' - Author names

Include in your HTML head:
```html
<style>
  @import url('https://fonts.googleapis.com/css?family=Bitter|Nanum+Gothic|Work+Sans&display=swap');
</style>
```

## Development

```bash
npm install
npm run build    # Build package
npm run dev      # Development mode with example
```

## Publish

```bash
npm run build
npm publish
```

## License

MIT
