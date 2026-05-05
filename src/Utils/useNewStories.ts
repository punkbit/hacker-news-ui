import { useState, useEffect, useCallback } from 'react'
import { INewStories } from '../Types'
import appConfig from '../config'

const HN_API = 'https://hacker-news.firebaseio.com/v0'

interface UseNewStoriesResult {
  loading: boolean
  error: Error | null
  stories: INewStories[]
  fetchMore: () => void
}

async function fetchItem(id: number): Promise<INewStories | null> {
  try {
    const res = await fetch(`${HN_API}/item/${id}.json`)
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

async function fetchStories(offset: number, limit: number): Promise<INewStories[]> {
  const res = await fetch(`${HN_API}/newstories.json`)
  const allIds: number[] = await res.json()
  const ids = allIds.slice(offset, offset + limit)
  const items = await Promise.all(ids.map(fetchItem))
  return items.filter((item): item is INewStories => item !== null)
}

export function useNewStories(): UseNewStoriesResult {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [stories, setStories] = useState<INewStories[]>([])
  const [offset, setOffset] = useState(0)

  const limit = appConfig.application.initialNumberOfStories

  // Initial fetch
  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        const newStories = await fetchStories(0, limit)
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
  }, [limit])

  // Load more function
  const fetchMore = useCallback(async () => {
    try {
      const moreStories = await fetchStories(offset, limit)
      setStories(prev => [...prev, ...moreStories])
      setOffset(prev => prev + moreStories.length)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch more stories'))
    }
  }, [offset, limit])

  return { loading, error, stories, fetchMore }
}
