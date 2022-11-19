import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../../common/theme'

export const Header = () => {
  const location = useLocation()
  console.log(location)

  return (
    <header>
      <h1>Hacker News</h1> <Link to={'latest'}>Latest</Link>|
      <Link to={'starred'}>Starred</Link>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button onClick={toggleTheme}> {theme.colors.text}</button>
        )}
      </ThemeContext.Consumer>
    </header>
  )
}
