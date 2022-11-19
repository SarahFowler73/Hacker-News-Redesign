import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Navigation = () => {
  const location = useLocation()
  console.log(location)
  return (
    <StyledNav>
      <Link to={'latest'}>latest</Link>|<Link to={'starred'}>starred</Link>
    </StyledNav>
  )
}
