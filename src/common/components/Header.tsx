import styled from 'styled-components'
import { ThemeContext } from '../../common/theme'
import { Navigation } from './Navigation'

import { ReactComponent as Logo } from '../assets/logo.svg'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.body};
  position: sticky;
  top: 0;
  padding: 45px 0px;
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderRight>
        <Logo />
        <Navigation />
      </HeaderRight>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button onClick={toggleTheme}> {theme.colors.text}</button>
        )}
      </ThemeContext.Consumer>
    </StyledHeader>
  )
}
