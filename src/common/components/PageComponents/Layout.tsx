import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { ColumnLayout } from '../LayoutHelpers'
import { Footer } from './Footer'
import { Header } from './Header'

const StyledApp = styled(ColumnLayout)`
  flex-grow: 1;
  min-height: 0;
  gap: 1.75rem;
  padding: 2rem 0;
`

const StyledMain = styled(ColumnLayout).attrs({ as: 'main' })`
  flex: 1 1 auto;
  min-height: 0;
`

const PageCap = styled.div`
  height: 4px;
  width: 100vw;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.accent2};
  top: 0;
  left: 0;
  z-index: 999;
`

export const Layout = () => (
  <StyledApp>
    <PageCap />
    <Header />
    <StyledMain>
      <Outlet />
    </StyledMain>
    <Footer />
  </StyledApp>
)
