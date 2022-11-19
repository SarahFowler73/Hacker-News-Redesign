import { Navigate, Route, Routes } from 'react-router-dom'
import { Latest } from './pages/articles/Latest'
import { Starred } from './pages/articles/Starred'
import { Layout } from './pages/common/Layout'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ReactQueryProvider } from './providers/ReactQueryProvider'
import { store } from './data/store'
import { ThemeProvider } from 'styled-components'
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
  ThemeContext,
} from './common/theme'
import React from 'react'

const AppRouter = () => (
  <Routes>
    {/* Redirect to latest news page on load, since the app will not have a separate home page */}
    <Route path="/" element={<Navigate replace to={'articles/latest'} />} />
    <Route path="articles" element={<Layout />}>
      <Route path={'latest'} element={<Latest />} />
      <Route path={'starred'} element={<Starred />} />
    </Route>

    <Route path="*" element={<div>wuh oh</div>} />
  </Routes>
)

function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false)

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme)
  const currentTheme = isDarkTheme ? darkTheme : lightTheme

  return (
    <BrowserRouter>
      <ReactQueryProvider>
        <ReduxProvider store={store}>
          <ThemeProvider theme={currentTheme}>
            <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
              <GlobalStyles />
              <AppRouter />
            </ThemeContext.Provider>
          </ThemeProvider>
        </ReduxProvider>
      </ReactQueryProvider>
    </BrowserRouter>
  )
}

export default App
