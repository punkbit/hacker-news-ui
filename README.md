# Hacker News Reader

A beautiful Hacker News reader built with React, TypeScript, and modern tooling. Features parallax scrolling effects and a polished UX.

![Hacker News Reader](https://img.shields.io/badge/HN-Reader-ff6600)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)

## Overview

This project is a modern Hacker News reader that consumes data directly from the [Hacker News Firebase REST API](https://github.com/HackerNews/API). It features:

- ✨ Beautiful parallax scrolling with 3D effects
- ⚡ Lightning-fast development with Vite
- 🎨 Customizable themes via styled-components
- 📱 Responsive design
- 🔧 Full TypeScript support

## Architecture

The project uses a modern React stack:

- **React 18** - Latest React with hooks and concurrent features
- **TypeScript 5** - Full type safety
- **Vite** - Ultra-fast build tool (replaced Create React App)
- **styled-components** - CSS-in-JS for component styling
- **ES Modules** - Modern JavaScript modules

Data is fetched directly from:
- `https://hacker-news.firebaseio.com/v0/newstories.json` (story IDs)
- `https://hacker-news.firebaseio.com/v0/item/{id}.json` (story details)

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

## Available Branches

### `chore/public-rest-api-v3-modernize` (Recommended)
Modern Vite-based stack with React 18 and REST API.

### `chore/public-rest-api-v2`
Working Webpack-based version with REST API and Node.js compatibility fixes.

### `chore/bring-to-file-2026`
Legacy version with local GraphQL wrapper (requires running separate API server).

### `chore/npm-package-react-hn-reader`
NPM package version - reusable component for other projects.

## Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start Vite dev server with HMR |
| `yarn build` | Type-check and build for production |
| `yarn preview` | Preview production build locally |

## NPM Package

This project is also available as a reusable NPM package:

### Installation

```bash
npm install react-hn-reader styled-components
# or
yarn add react-hn-reader styled-components
```

### Importing into Your React Project

**Option 1: Install from NPM Registry (Recommended)**

```bash
npm install react-hn-reader styled-components
```

Then import in your React app:

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

**Option 2: Copy Package Folder**

Copy the `react-hn-reader/` folder to your project's directory:

```bash
# Copy to your project's packages folder
cp -r react-hn-reader /path/to/your/project/packages/

# Install the package from local path
cd /path/to/your/project
npm install ./packages/react-hn-reader
```

Then import as usual:

```tsx
import { HackerNewsReader, ThemeProvider } from 'react-hn-reader'
```

**Option 3: Git Submodule**

Add this repository as a submodule:

```bash
cd your-project
git submodule add https://github.com/punkbit/react-hn-reader.git packages/react-hn-reader
git submodule update --init
```

Then build and install:

```bash
cd packages/react-hn-reader
npm install
npm run build
cd ../..
npm install ./packages/react-hn-reader
```

### Peer Dependencies

The package requires these peer dependencies:

```json
{
  "react": ">=16.8.0",
  "react-dom": ">=16.8.0",
  "styled-components": ">=5.0.0"
}
```

### Usage Example

```tsx
import React from 'react'
import { HackerNewsReader, ThemeProvider } from 'react-hn-reader'

// Optional: Custom theme
const customTheme = {
  orange: '#ff4500',
  platinum: '#f0f0f0',
  onyx: '#1a1a1a'
}

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <HackerNewsReader 
        initialCount={30}
        enableLoadMore={true}
        onStoryClick={(story) => console.log(story.title)}
      />
    </ThemeProvider>
  )
}

export default App
```

See the [`react-hn-reader/README.md`](react-hn-reader/README.md) for complete package documentation.

## License

MIT © Punkbit
