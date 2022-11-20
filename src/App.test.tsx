import { render, screen } from '@testing-library/react'

import App from './App'

test('renders the app', () => {
  render(<App />)
  const element = screen.getByText(/hacker news/i)
  expect(element).toBeInTheDocument()
})
