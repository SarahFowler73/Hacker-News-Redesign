import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const location = useLocation()
  console.log(location)
  return (
    <header>
      <h1>Hacker News</h1> <Link to={'latest'}>Latest</Link>|
      <Link to={'starred'}>Starred</Link>
    </header>
  )
}
