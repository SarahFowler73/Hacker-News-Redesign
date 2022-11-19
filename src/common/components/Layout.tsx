import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { Footer } from './Footer'
import { Header } from './Header'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  gap: 1.75rem;
  padding: 2rem 0;
`

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
`

export const Layout = () => (
  <StyledApp>
    <Header />
    <StyledMain>
      <Outlet />
    </StyledMain>
    <Footer />
  </StyledApp>
)
