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

**Important:** You must include `DefaultStyles` for proper typography and styling. Also load the Google Fonts in your HTML:

```html
<!-- Add to your HTML <head> -->
<link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Nanum+Gothic:wght@400;700&family=Work+Sans:wght@400;700&display=swap" rel="stylesheet">
```

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

**Note:** Don't forget to load Google Fonts in your HTML (see [Fonts](#fonts) section).

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

## Fonts

The component uses these Google Fonts (you must load them in your HTML):
- **Bitter** - Primary text font
- **Work Sans** - Headings  
- **Nanum Gothic** - Author names

**Load via HTML `<link>` tag (recommended):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Nanum+Gothic:wght@400;700&family=Work+Sans:wght@400;700&display=swap" rel="stylesheet">
```

**Or load via CSS @import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Nanum+Gothic:wght@400;700&family=Work+Sans:wght@400;700&display=swap');
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
