import React from 'react'
import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  mode: 'light',
  colors: {
    body: '#FFFFFF',
    text: '#000000',
    accent: '#FE7139',
    accentContrast: '#FFFFFF',
    accent2: '#FF6600',
    opacity: {
      50: '7F',
    },
  },
  fonts: {
    body: '"Open Sans", sans-serif',
    mono: '"Ubuntu Mono", monospace',
  },
  fontSizes: {
    caption: '0.625rem',
    body1: '1rem',
    body2: '0.875rem',
    heading: '1.25rem',
  },
}

export const darkTheme = {
  ...lightTheme,
  mode: 'dark',
  colors: {
    ...lightTheme.colors,
    body: '#000000',
    text: '#FFFFFF',
  },
}

export const GlobalStyles = createGlobalStyle<{ theme: typeof lightTheme }>`

  html, body {
    height: 100%;
  }

  html {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    max-width: 1260px;
    margin: auto;
  }

  #root {
    min-height: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    flex-grow:1;
  }

  * {
    box-sizing: border-box;
  } 

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
  a:hover {
    opacity: 75%;
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
