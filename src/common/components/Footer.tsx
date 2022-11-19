import styled from 'styled-components'
import { Navigation } from './Navigation'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: ${({ theme }) => `4px solid ${theme.colors.accent2};`};
`

export const Footer = () => {
  return (
    <StyledFooter>
      <h2>Hacker News</h2>
      <Navigation />
    </StyledFooter>
  )
}
