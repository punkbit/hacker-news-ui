import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
  text-align: center;
  padding-bottom: 25vh;
  
  & > svg {
    width: 86vh;
  }
`

const LogoSVG = styled.svg<{ black?: boolean }>`
  width: 86vh;
  fill: ${props => props.black ? '#000' : '#ff6600'};
`

interface LogoProps {
  black?: boolean
}

const Logo: React.FC<LogoProps> = ({ black = false }) => {
  return (
    <LogoContainer>
      <LogoSVG 
        viewBox="0 0 200 50" 
        black={black}
        xmlns="http://www.w3.org/2000/svg"
      >
        <text 
          x="50%" 
          y="50%" 
          dominantBaseline="middle" 
          textAnchor="middle"
          fontFamily="'Bitter', serif"
          fontSize="32"
          fontWeight="bold"
        >
          HN Reader
        </text>
      </LogoSVG>
    </LogoContainer>
  )
}

export default Logo
