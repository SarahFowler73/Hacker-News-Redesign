import styled from 'styled-components'

import { ColumnLayout } from '../LayoutHelpers'
import { Navigation } from './Navigation'

const StyledFooter = styled(ColumnLayout).attrs({ as: 'footer' })`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.body};
  border-top: ${({ theme }) => `4px solid ${theme.colors.accent2};`};
`

const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  font-weight: bold;
`

export const Footer = () => {
  return (
    <StyledFooter>
      <Title>Hacker News</Title>
      <Navigation />
    </StyledFooter>
  )
}
