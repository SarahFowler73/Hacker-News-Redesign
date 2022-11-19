import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Footer } from './Footer'
import { Header } from './Header'

const StyledMain = styled.main`
  margin: 50px 0px;
`

export const Layout = () => (
  <>
    <Header />
    <StyledMain>
      <Outlet />
    </StyledMain>
    <Footer />
  </>
)
