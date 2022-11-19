import React from 'react'
import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  colors: {
    body: '#000',
    text: '#FFF',
    accent: '#FE7139',
    accent2: '#FF6600',
  },
}

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    body: '#FFF',
    text: '#000',
  },
}

export const GlobalStyles = createGlobalStyle<{ theme: typeof lightTheme }>`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body {
    font-family: "Open Sans", sans-serif;
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
  a:hover {
    opacity: 50%;
    text-decoration: underline;
  }
`

export const ThemeContext = React.createContext({
  theme: lightTheme,
  toggleTheme: () => {},
})
