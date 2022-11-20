import styled from 'styled-components'

export const Button = styled.button`
  padding: 8px 14px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accentContrast};
  &:hover {
    box-shadow: ${({ theme }) =>
      `0 0 2px 2px ${theme.colors.accent}${theme.colors.opacity[50]}`};
  }
  &:disabled {
    opacity: 50%;
    pointer-events: none;
  }
`
