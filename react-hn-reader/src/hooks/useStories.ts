import { useState, useEffect, useCallback } from 'react'
import type { StoryData, UseStoriesConfig, UseStoriesReturn } from '../types'

const DEFAULT_API_URL = 'https://hacker-news.firebaseio.com/v0'
const DEFAULT_INITIAL_COUNT = 30

async function fetchItem(apiUrl: string, id: number): Promise<StoryData | null> {
  try {
    const res = await fetch(`${apiUrl}/item/${id}.json`)
    const item = await res.json()
    if (!item) return null
    return {
      id: String(item.id),
      title: item.title || '',
      url: item.url || '',
      time: item.time || 0,
      score: item.score || 0,
      by: { id: item.by || '' },
      __typename: 'Story'
    }
  } catch {
    return null
  }
}

async function fetchStories(
  apiUrl: string,
  offset: number,
  limit: number
): Promise<StoryData[]> {
  const res = await fetch(`${apiUrl}/newstories.json`)
  const allIds: number[] = await res.json()
  const ids = allIds.slice(offset, offset + limit)
  const items = await Promise.all(ids.map(id => fetchItem(apiUrl, id)))
  return items.filter((item): item is StoryData => item !== null)
}

export function useStories(config: UseStoriesConfig = {}): UseStoriesReturn {
  const {
    apiUrl = DEFAULT_API_URL,
    initialCount = DEFAULT_INITIAL_COUNT
  } = config

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [stories, setStories] = useState<StoryData[]>([])
  const [offset, setOffset] = useState(0)

  // Initial fetch
  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        const newStories = await fetchStories(apiUrl, 0, initialCount)
        if (!cancelled) {
          setStories(newStories)
          setOffset(newStories.length)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error('Failed to fetch stories'))
          setLoading(false)
        }
      }
    }

    load()
    return () => { cancelled = true }
  }, [apiUrl, initialCount])

  // Load more function
  const fetchMore = useCallback(async () => {
    try {
      const moreStories = await fetchStories(apiUrl, offset, initialCount)
      setStories(prev => [...prev, ...moreStories])
      setOffset(prev => prev + moreStories.length)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch more stories'))
    }
  }, [apiUrl, offset, initialCount])

  return { loading, error, stories, fetchMore }
}
