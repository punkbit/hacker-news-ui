import React from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`
  background: white;
  color: black;
  font-size: 2.6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  text-align: center;
`

const ErrorContent = styled.p`
  margin: 1rem 0;
  max-width: 600px;
`

const RetryButton = styled.button`
  background: #ff6600;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2rem;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

interface ErrorStateProps {
  error: Error
  onRetry?: () => void
}

const ErrorState: React.FC<ErrorStateProps> = ({ error, onRetry }) => {
  return (
    <ErrorContainer>
      <h1>Try again later, please!</h1>
      <ErrorContent>
        Oops! The service seems to be down at the moment, my apologies for any inconvenience.
      </ErrorContent>
      <ErrorContent>
        The error that was encountered is: {error.message}
      </ErrorContent>
      {onRetry && (
        <RetryButton onClick={onRetry}>
          Retry
        </RetryButton>
      )}
    </ErrorContainer>
  )
}

export default ErrorState
