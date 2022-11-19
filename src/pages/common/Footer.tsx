import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
      <h2>Hacker News</h2>
      <Link to={'latest'}>Latest</Link>|<Link to={'starred'}>Starred</Link>
    </footer>
  )
}
