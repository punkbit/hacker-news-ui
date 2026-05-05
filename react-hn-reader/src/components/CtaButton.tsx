import React from 'react'
import styled from 'styled-components'
import type { Theme } from '../types'

interface StyledProps {
  theme: Theme
}

interface CtaButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const Button = styled.button<StyledProps>`
  background: ${(props) => props.theme.orange || '#ff6600'};
  line-height: 4rem;
  font-size: 1rem;
  color: #fff;
  border-radius: 8px;
  padding: 0 2rem;
  margin: 2rem;
  border: none;
  cursor: pointer;
  box-shadow: 2px 6px 22px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.68;
  }
`

const CtaButton: React.FC<CtaButtonProps> = ({ onClick, children }) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  )
}

export default CtaButton
