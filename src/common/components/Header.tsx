import styled from 'styled-components'

import { ThemeContext } from '../../common/theme'
import { Logo } from '../assets/Logo'
import { Moon } from '../assets/Moon'
import { Sun } from '../assets/Sun'
import { IconButton } from './IconButton'
import { Navigation } from './Navigation'
import { HeadingStyles } from './Typography'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.body};
  position: sticky;
  top: 0;
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const StyledH1 = styled.h1(() => HeadingStyles)

export const Header = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <StyledHeader>
          <HeaderRight>
            <LogoContainer>
              <Logo />
              <StyledH1>Hacker News</StyledH1>
            </LogoContainer>
            <Navigation />
          </HeaderRight>

          <IconButton
            onClick={() => {
              console.log(theme.mode)
              toggleTheme()
            }}
            label={`Switch to ${
              theme.mode === 'light' ? 'Dark' : 'Light'
            } Theme`}
          >
            {theme.mode === 'light' ? <Moon /> : <Sun />}
          </IconButton>
        </StyledHeader>
      )}
    </ThemeContext.Consumer>
  )
}
