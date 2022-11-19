import { NavLink, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${({ theme }) => theme.fontSizes.body2};
`

const LinkText = styled.span(
  ({ isActive }: { isActive: boolean }) => css`
    color: ${({ theme }) =>
      isActive ? theme.colors.accent : theme.colors.text};
  `,
)

export const Navigation = () => {
  const location = useLocation()
  const activePage = location.pathname
  console.log(activePage)

  return (
    <StyledNav>
      <NavLink to={'latest'}>
        {({ isActive }) => <LinkText isActive={isActive}>latest</LinkText>}
      </NavLink>
      |
      <NavLink to={'starred'}>
        {({ isActive }) => <LinkText isActive={isActive}>starred</LinkText>}
      </NavLink>
    </StyledNav>
  )
}
