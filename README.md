# Hacker News Reader

An experimental Hacker News reader built with React, TypeScript, and modern tooling. Features parallax scrolling effects and a polished UX.

![Hacker News Reader](https://img.shields.io/badge/HN-Reader-ff6600)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)

## Overview

This project is a modern Hacker News reader that consumes data directly from the [Hacker News Firebase REST API](https://github.com/HackerNews/API). It features:

- ✨ A parallax-like scrolling inspired in starwars
- ⚡ Lightning-fast development with Vite
- 🎨 Customizable themes via styled-components
- 📱 Responsive design
- 🔧 Full TypeScript support

## Installation

```bash
npm install react-hn-reader styled-components
```

**Peer dependencies:** react >=16.8, react-dom >=16.8, styled-components >=5.0

## Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

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
