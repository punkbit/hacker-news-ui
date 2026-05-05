import React from 'react'
import styled from 'styled-components'
import ArrowOut from '../Icons/ArrowOut'
import type { StoryData } from '../types'

interface StoryCardProps {
  story: StoryData
  index: number
  onClick?: (story: StoryData) => void
}

const StoryContainer = styled.div`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  margin-bottom: 10rem;
  transition: background 0.3s;
  position: relative;

  &:hover {
    background: ${(props) => props.theme.orange};

    & span {
      opacity: 0.7;
    }
  }

  & > svg {
    position: relative;
    width: 14rem;
  }

  & span {
    position: absolute;
    bottom: -3rem;
    right: 0;
    font-size: 2rem;
    opacity: 0;
    background: ${(props) => props.theme.platinum};
  }
`

const StoryTitle = styled.div``

const StoryCard: React.FC<StoryCardProps> = ({ story, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onClick) {
      onClick(story)
    } else {
      window.open(story.url, '_blank')
    }
  }

  return (
    <StoryContainer onClick={handleClick}>
      <StoryTitle>{story.title}</StoryTitle>
      <ArrowOut />
      <span>{story.by.id}</span>
    </StoryContainer>
  )
}

export default StoryCard
