import React from 'react'
import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  colors: {
    body: '#000',
    text: '#FFF',
    accent: '#FE7139',
    accentContrast: '#FFF',
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
  @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono');

  html {
    border-top: ${({ theme }) => `4px solid ${theme.colors.accent2}`};
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
  }

  body {
    font-family: "Open Sans", sans-serif;
    max-width: 1260px;
    margin: auto;
  }
  
  * {
    box-sizing: border-box;
  } 

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
  a:hover {
    opacity: 50%;
    text-decoration: underline;
  }

  button {
    border: none;
  }
`

export const ThemeContext = React.createContext({
  theme: lightTheme,
  toggleTheme: () => {},
})
