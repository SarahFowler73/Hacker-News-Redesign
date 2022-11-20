import { render, screen } from '@testing-library/react'

import App from './App'

test('renders the app', () => {
  render(<App />)
  const [header, footer] = screen.getAllByText(/hacker news/i)
  expect(header).toBeInTheDocument()
  expect(footer).toBeInTheDocument()
})
