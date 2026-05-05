# Hacker News UI - Session Summary

## Overview
Revived a 6-year-old React + TypeScript Hacker News reader app that was broken due to:
1. Node.js compatibility issues (OpenSSL 3.0)
2. Dead GraphQL API endpoints (graphqlhub.com, herokuapp)

## Branches

### `chore/public-rest-api`
**Status:** Working - fetches directly from HN REST API

Uses the official Hacker News Firebase REST API with no external dependencies.

**Key files:**
- `src/Utils/useNewStories.ts` - Custom React hook that fetches from `https://hacker-news.firebaseio.com/v0/`
- `src/Components/ScrollableList/index.tsx` - Updated to use `useNewStories` hook
- `src/index.tsx` - Simplified, removed Apollo Provider
- `src/Components/Error/index.tsx` - Uses standard `Error` type instead of `ApolloError`

**To run:**
```bash
yarn start
```

### `chore/bring-to-file-2026`
**Status:** Working - requires local GraphQL server

Uses Apollo Client with a local GraphQL wrapper around the HN REST API.

**Key files:**
- `api/index.js` - Local GraphQL server (Express + graphql-http)
- `api/package.json` - Dependencies for GraphQL server
- Original Apollo-based React components

**To run:**
```bash
# Terminal 1
yarn api

# Terminal 2
yarn start
```

## Changes Made

### 1. Fixed Node.js OpenSSL Compatibility
Added `NODE_OPTIONS=--openssl-legacy-provider` to start/build scripts in `package.json`:
```json
"scripts": {
  "start": "NODE_OPTIONS=--openssl-legacy-provider node scripts/start.js",
  "build": "NODE_OPTIONS=--openssl-legacy-provider node scripts/build.js"
}
```

### 2. Updated .gitignore
Changed `/node_modules` to `node_modules/` to ignore all nested node_modules directories.

### 3. Created REST API Hook (`chore/public-rest-api`)
New `useNewStories.ts` hook that:
- Fetches story IDs from `/newstories.json`
- Fetches individual story details from `/item/{id}.json`
- Supports pagination via `fetchMore()`

### 4. Created Local GraphQL Server (`chore/bring-to-file-2026`)
`api/index.js` provides:
- GraphQL schema matching original graphqlhub format (`hn { newStories { ... } }`)
- Endpoints: `newStories`, `topStories`, `bestStories`
- Runs on port 4000

### 5. Removed Apollo Dependencies (`chore/public-rest-api`)
Removed from `package.json`:
- `@apollo/react-hooks`
- `apollo-boost`
- `apollo-link-http`
- `graphql`

### 6. Cleaned Git History
Used `git filter-branch` to remove accidentally committed `api/node_modules` from history.

## API Endpoints

### HN Firebase REST API (used by REST branch)
- Base: `https://hacker-news.firebaseio.com/v0/`
- New stories: `/newstories.json` → array of IDs
- Item details: `/item/{id}.json` → story object

### Local GraphQL API (used by GraphQL branch)
- Endpoint: `http://localhost:4000/graphql`
- Query example:
```graphql
{
  hn {
    newStories(limit: 30, offset: 0) {
      id
      title
      url
      score
      by { id }
    }
  }
}
```

## Pending/Uncommitted Work

On `chore/bring-to-file-2026`:
- `.gitignore` update (node_modules/)
- `api/` folder (index.js, package.json, package-lock.json)

Run `git status` to see staged changes ready to commit.
