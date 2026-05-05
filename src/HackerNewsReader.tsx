import React, { useState, useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components'
import { useStories } from './hooks/useStories'
import StoryCard from './components/StoryCard'
import LoadingState from './components/LoadingState'
import ErrorState from './components/ErrorState'
import CtaButton from './components/CtaButton'
import ScrollDownTip from './components/ScrollDownTip'
import Logo from './Icons/Logo'
import type { HackerNewsReaderProps, StoryData } from './types'

// Styled components
const ScrollWrapper = styled.div<{ height: number }>`
  position: relative;
  height: ${(props) => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ScrollableListContainer = styled.div`
  font-size: 6vh;
  line-height: 1.5;
  position: relative;
  height: 100vh;
  perspective: 40rem;
  max-width: 900px;
  position: fixed;
  top: 0;
`

const ScrollableListTop = styled.div`
  height: 40vh;
  transform-origin: bottom center;
  transform: rotateX(-70deg);
  overflow: hidden;
`

const ScrollableListCenter = styled.div`
  padding: 0;
  margin: 0;
  height: 30vh;
  overflow: hidden;
`

const ScrollableListBottom = styled.div`
  height: 80vh;
  transform-origin: top center;
  transform: rotateX(-50deg);
  overflow: hidden;
`

const ScrollableListContent = styled.div<{ posY?: number }>`
  font-size: 8vh;
  line-height: 1.5;
  transform: ${(props) => `translateY(${props.posY || 0}px)`};
`

const ScrollableLogoContainer = styled.div`
  text-align: center;
  padding-bottom: 25vh;
  
  & > svg {
    width: 86vh;
  }
`

const BlackLogoContainer = styled.div<{ hide: boolean }>`
  transition: opacity 0.3s;
  & > svg {
    width: 50px;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    transition: opacity 0.3s;
    opacity: ${(props) => props.hide ? '0' : '1'};
    cursor: pointer;
  }

  &:hover {
    opacity: 0.74;
  }
`

// Constants for scroll calculations
const SCROLL_CONTAINER_TOP_RATIO = 0.398
const SCROLL_CONTAINER_BOTTOM_RATIO = 0.3

const HackerNewsReader: React.FC<HackerNewsReaderProps> = ({
  apiUrl = 'https://hacker-news.firebaseio.com/v0',
  initialCount = 30,
  theme,
  className,
  enableLoadMore = true,
  onStoryClick,
  renderStory,
  renderLoading,
  renderError,
  renderLogo
}) => {
  const [height, setHeight] = useState<number>(0)
  const [scrollPosition, setScrollPosition] = useState({
    top: { y: 0 },
    center: { y: 0 },
    bottom: { y: 0 }
  })
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [hideScrollTip, setHideScrollTip] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement>(null)
  
  const { loading, error, stories, fetchMore } = useStories({
    apiUrl,
    initialCount
  })

  const scrollToHandler = useCallback(() => {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
    const offsetTop = window.innerHeight * SCROLL_CONTAINER_TOP_RATIO
    const offsetBottom = window.innerHeight * SCROLL_CONTAINER_BOTTOM_RATIO
    
    setScrollPosition({
      top: { y: -(scrollY - offsetTop) },
      center: { y: -scrollY },
      bottom: { y: -(scrollY + offsetBottom) }
    })
    
    // Hide scroll tip after scrolling past screen height
    const hide = scrollY > (window.screen.availHeight * 1.1)
    setHideScrollTip(hide)
  }, [])

  const measureHeight = useCallback(() => {
    const measuredHeight = contentRef.current?.clientHeight
    if (measuredHeight && measuredHeight > 0) {
      const newHeight = measuredHeight * 1.15
      setHeight(newHeight)
    }
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (isVisible && !loading && stories.length > 0) {
      requestAnimationFrame(() => {
        measureHeight()
      })
    }
  }, [isVisible, loading, stories, measureHeight])

  useEffect(() => {
    scrollToHandler()
  }, [isVisible, scrollToHandler])

  useEffect(() => {
    window.addEventListener('scroll', scrollToHandler)
    return () => {
      window.removeEventListener('scroll', scrollToHandler)
    }
  }, [scrollToHandler])

  const loadMoreHandler = useCallback(() => {
    if (enableLoadMore) {
      fetchMore()
    }
  }, [enableLoadMore, fetchMore])

  const handleRetry = useCallback(() => {
    window.location.reload()
  }, [])

  // Render functions
  const renderStoryList = (storyList: StoryData[], position: 'top' | 'center' | 'bottom') => {
    return storyList.map((story, index) => {
      if (!story.url) return null

      if (renderStory) {
        return (
          <div key={`${position}-${story.id}`}>
            {renderStory(story, index)}
          </div>
        )
      }

      return (
        <StoryCard
          key={`${position}-${story.id}`}
          story={story}
          index={index}
          onClick={onStoryClick}
        />
      )
    })
  }

  const logoComponent = renderLogo ? renderLogo() : <Logo />

  if (error) {
    if (renderError) {
      return <>{renderError(error, handleRetry)}</>
    }
    return <ErrorState error={error} onRetry={handleRetry} />
  }

  if (!isVisible || loading) {
    if (renderLoading) {
      return <>{renderLoading()}</>
    }
    return <LoadingState />
  }

  return (
    <>
      <ScrollDownTip hide={hideScrollTip} />
      <ScrollWrapper height={height} className={className}>
        <ScrollableListContainer>
          <ScrollableListTop>
            <ScrollableListContent posY={scrollPosition.top.y}>
              <ScrollableLogoContainer>
                {logoComponent}
              </ScrollableLogoContainer>
              {renderStoryList(stories, 'top')}
              {enableLoadMore && (
                <CtaButton onClick={loadMoreHandler}>
                  Load more...
                </CtaButton>
              )}
            </ScrollableListContent>
          </ScrollableListTop>
          
          <ScrollableListCenter>
            <ScrollableListContent posY={scrollPosition.center.y}>
              <div ref={contentRef}>
                <ScrollableLogoContainer>
                  {logoComponent}
                </ScrollableLogoContainer>
                {renderStoryList(stories, 'center')}
                {enableLoadMore && (
                  <CtaButton onClick={loadMoreHandler}>
                    Load more...
                  </CtaButton>
                )}
              </div>
            </ScrollableListContent>
          </ScrollableListCenter>
          
          <ScrollableListBottom>
            <ScrollableListContent posY={scrollPosition.bottom.y}>
              <ScrollableLogoContainer>
                {logoComponent}
              </ScrollableLogoContainer>
              {renderStoryList(stories, 'bottom')}
              {enableLoadMore && (
                <CtaButton onClick={loadMoreHandler}>
                  Load more...
                </CtaButton>
              )}
            </ScrollableListContent>
          </ScrollableListBottom>
        </ScrollableListContainer>
      </ScrollWrapper>
      <BlackLogoContainer hide={!hideScrollTip}>
        <Logo black={true} />
      </BlackLogoContainer>
    </>
  )
}

export default HackerNewsReader
