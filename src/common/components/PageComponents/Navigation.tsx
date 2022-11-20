import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { RowLayout } from '../LayoutHelpers'
import { TextDivide } from '../TextDivide'

const StyledNav = styled(RowLayout).attrs({ as: 'nav' })`
  gap: 4px;
  font-size: ${({ theme }) => theme.fontSizes.body2};
`

const LinkText = styled.span(
  ({ isActive }: { isActive: boolean }) => css`
    color: ${({ theme }) =>
      isActive ? theme.colors.accent : theme.colors.text};
    font-weight: ${isActive ? 'bold' : 'normal'};
  `,
)

export const Navigation = () => (
  <StyledNav>
    <NavLink to={'latest'}>
      {({ isActive }) => <LinkText isActive={isActive}>latest</LinkText>}
    </NavLink>
    <TextDivide />
    <NavLink to={'starred'}>
      {({ isActive }) => <LinkText isActive={isActive}>starred</LinkText>}
    </NavLink>
  </StyledNav>
)
