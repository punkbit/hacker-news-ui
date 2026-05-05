import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useNewStories } from '../../Utils/useNewStories'
import {
  ScrollWrapper,
  ScrollableListContainer,
  ScrollableListTop,
  ScrollableListCenter,
  ScrollableListBottom,
  ScrollableListContent,
  ScrollableLogoContainer
} from './styled'
import { IPropsScrollableList, IPropsScrollPosition, INewStories } from '../../Types'
import { getOffsetValue } from '../../Utils/helpers'
import { SCROLL_CONTAINER_TOP, SCROLL_CONTAINER_BOTTOM } from '../../Utils/constants'
import Logo from '../../Icons/Logo'
import Story from '../../Components/Story'
import Loading from '../Loading'
import Error from '../Error'
import CtaButton from '../CtaButton'

const ScrollableList: React.FC<IPropsScrollableList> = (props) => {
  const initialState = {
    top: {
      y: 0
    },
    center: {
      y: 0
    },
    bottom: {
      y: 0
    }
  }
  const [height, setHeight] = useState<number>(0)
  const [scrollPosition, setScrollPosition] = useState<IPropsScrollPosition>(initialState)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const { loading, error, stories, fetchMore } = useNewStories()

  const scrollToHandler = useCallback(() => {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
    const offsetTop = getOffsetValue(SCROLL_CONTAINER_TOP)
    const offsetBottom = getOffsetValue(SCROLL_CONTAINER_BOTTOM)
    console.log('Scroll event:', { scrollY, offsetTop, offsetBottom, documentHeight: document.documentElement.scrollHeight, windowHeight: window.innerHeight })
    setScrollPosition({
      top: {
        y: -(scrollY-offsetTop)
      },
      center: {
        y: -scrollY
      },
      bottom: {
        y: -(scrollY+offsetBottom)
      },
    })
  }, [])

  const loadMoreHandler = useCallback(() => {
    fetchMore()
  }, [fetchMore])

  useEffect(() => {
    setIsVisible(true)
  }, [setIsVisible])

  // Use a timeout to ensure DOM is updated before measuring
  useEffect(() => {
    const timer = setTimeout(() => {
      const measuredHeight = contentRef.current?.clientHeight
      console.log('Height calculation (delayed):', { measuredHeight, contentRef: contentRef.current, storiesLoaded: stories?.length })
      if (measuredHeight && measuredHeight > 0) {
        const newHeight = measuredHeight * 1.15
        console.log('Setting height to:', newHeight)
        setHeight(newHeight)
      }
    }, 100) // Small delay to let React render the DOM
    return () => clearTimeout(timer)
  }, [isVisible, stories, loading])

  useEffect(() => {
    scrollToHandler()
  }, [isVisible, scrollToHandler])

  useEffect(() => {
    window.addEventListener('scroll', scrollToHandler)
    return () => {
      window.removeEventListener('scroll', scrollToHandler)
    }
  }, [isVisible, scrollToHandler])


  console.log('Render state:', { isVisible, loading, storiesCount: stories?.length, height, scrollY: window.scrollY, error })

  if (error) return <Error error={error} />

  return (isVisible && !loading && (
      <ScrollWrapper height={height}>
        <ScrollableListContainer>
          <ScrollableListTop>
            <ScrollableListContent posY={scrollPosition.top.y}>
                <ScrollableLogoContainer>
                  <Logo />
                </ScrollableLogoContainer>
                {
                  stories &&
                  stories.map((v: INewStories, k: number) => v && v.url && <Story key={k} title={v.title} url={v.url} by={v.by.id} />)
                }
                <CtaButton onClick={loadMoreHandler}>{'Load more...'}</CtaButton>
            </ScrollableListContent>
          </ScrollableListTop>
          <ScrollableListCenter>
            <ScrollableListContent posY={scrollPosition.center.y}>
              <div ref={contentRef}>
                <ScrollableLogoContainer>
                  <Logo />
                </ScrollableLogoContainer>
                {
                  stories &&
                  stories.map((v: INewStories, k: number) => v && v.url && <Story key={k} title={v.title} url={v.url} by={v.by.id} />)
                }
                <CtaButton onClick={loadMoreHandler}>{'Load more...'}</CtaButton>
              </div>
            </ScrollableListContent>
          </ScrollableListCenter>
          <ScrollableListBottom>
            <ScrollableListContent posY={scrollPosition.bottom.y}>
                <ScrollableLogoContainer>
                  <Logo />
                </ScrollableLogoContainer>
                {
                  stories &&
                  stories.map((v: INewStories, k: number) => v && v.url && <Story key={k} title={v.title} url={v.url} by={v.by.id} />)
                }
                <CtaButton onClick={loadMoreHandler}>{'Load more...'}</CtaButton>
            </ScrollableListContent>
          </ScrollableListBottom>
        </ScrollableListContainer>
      </ScrollWrapper>)) ||
      <Loading />
}

export default ScrollableList
