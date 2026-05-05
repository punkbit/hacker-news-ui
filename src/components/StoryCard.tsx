import React from 'react'
import styled from 'styled-components'
import type { StoryData, Theme } from '../types'

interface StoryCardProps {
  story: StoryData
  index: number
  onClick?: (story: StoryData) => void
}

interface StyledProps {
  theme: Theme
}

const StoryContainer = styled.div<StyledProps>`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.68;
  }

  &:hover .hn-reader__story-author {
    font-size: 2rem;
    opacity: 1;
  }
`

const StoryTitle = styled.a<StyledProps>`
  font-family: 'Bitter', serif;
  font-weight: 600;
  color: ${(props) => props.theme.onyx || '#313638'};
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    text-decoration: underline;
  }
`

const StoryAuthor = styled.span<StyledProps>`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 1.4rem;
  font-weight: 100;
  margin-left: 0.5rem;
  transition: all 0.3s;
  opacity: 0;
  background: ${(props) => props.theme.platinum || '#E8E9EB'};
`

const StoryCard: React.FC<StoryCardProps> = ({ story, index, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(story)
    }
  }

  return (
    <StoryContainer onClick={handleClick}>
      <StoryTitle
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          if (onClick) {
            e.preventDefault()
            handleClick()
          }
        }}
      >
        {story.title}
      </StoryTitle>
      <StoryAuthor className="hn-reader__story-author">
        {story.by.id}
      </StoryAuthor>
    </StoryContainer>
  )
}

export default StoryCard
