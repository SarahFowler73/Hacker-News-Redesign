import styled from 'styled-components'

export const Button = styled.button`
  padding: 8px 14px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accentContrast};
`
