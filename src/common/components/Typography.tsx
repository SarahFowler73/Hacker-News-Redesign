import { css } from 'styled-components'

export const HeadingStyles = css`
  font-size: ${({ theme }) => theme.fontSizes.heading};
  opacity: 100%;
`

export const MonoStyles = css`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.125rem;
  font-weight: bold;
`

export const SmallTextStyles = css`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => `${theme.colors.text}${theme.colors.opacity['50']}`};
`
