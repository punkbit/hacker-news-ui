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

  useEffect(() => {
    const height = contentRef.current?.clientHeight
    height &&
    setHeight(height * 1.15) // extra height to compensate scroll to main middle content
  }, [isVisible, stories])

  useEffect(() => {
    scrollToHandler()
  }, [isVisible, scrollToHandler])

  useEffect(() => {
    window.addEventListener('scroll', scrollToHandler)
    return () => {
      window.removeEventListener('scroll', scrollToHandler)
    }
  }, [isVisible, scrollToHandler])


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
