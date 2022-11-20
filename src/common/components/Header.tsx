import styled from 'styled-components'

import { ThemeContext } from '../../common/theme'
import { Logo } from '../assets/Logo'
import { Moon } from '../assets/Moon'
import { Sun } from '../assets/Sun'
import { IconButton } from './IconButton'
import { RowLayout } from './LayoutHelpers'
import { Navigation } from './Navigation'
import { HeadingStyles } from './Typography'

const StyledHeader = styled(RowLayout).attrs({ as: 'header' })`
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.body};
  position: sticky;
  top: 4px;
`

const HeaderRight = styled(RowLayout)`
  gap: 2rem;
`

const LogoContainer = styled(RowLayout)`
  gap: 0.5rem;
`

const StyledH1 = styled.h1(() => HeadingStyles)

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderRight>
        <LogoContainer>
          <Logo />
          <StyledH1>Hacker News</StyledH1>
        </LogoContainer>
        <Navigation />
      </HeaderRight>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
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
        )}
      </ThemeContext.Consumer>
    </StyledHeader>
  )
}
