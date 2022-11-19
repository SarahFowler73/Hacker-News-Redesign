import React from 'react'
import styled from 'styled-components'

const StyledIconButton = styled.button`
  background: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border: ${({ theme }) => `1px solid ${theme.colors.text}`};
  }
`

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export const IconButton = ({ label, ...buttonProps }: IconButtonProps) => (
  <StyledIconButton aria-label={label} {...buttonProps}></StyledIconButton>
)
