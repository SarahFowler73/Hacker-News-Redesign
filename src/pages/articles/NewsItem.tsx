import * as O from 'fp-ts/Option'
import styled, { css } from 'styled-components'

import { ColumnLayout, RowLayout } from '../../common/components/LayoutHelpers'
import { TextDivide } from '../../common/components/TextDivide'
import { MonoStyles, SmallTextStyles } from '../../common/components/Typography'
import {
  HN_BASE_ITEM_URL,
  HN_BASE_SEARCH_URL,
  HN_BASE_USER_URL,
} from '../../common/constants'
import { formatRelativeTimeFromISO } from '../../common/formatTime'
import { TransformedHitResult } from '../../common/types'
import { SaveItemButton } from './SaveItemButton'

const StyledLi = styled.li(
  () => css`
    ${MonoStyles}
    color: ${({ theme }) =>
      `${theme.colors.text}${theme.colors.opacity['50']}`};
    font-weight: normal;
  `,
)
const StyledListContent = styled(ColumnLayout)`
  gap: 0.625rem;
`
const StyledArticleTitle = styled.a(() => MonoStyles)
const StyledLink = styled.a(() => SmallTextStyles)
const StyledSpan = styled.span(() => SmallTextStyles)
const StyledListSecondLine = styled(RowLayout)(() => SmallTextStyles)

const NewsItemFirstRow = ({ hit }: { hit: TransformedHitResult }) => (
  <RowLayout>
    <StyledArticleTitle href={hit.url} target={'_blank'} rel="noreferrer">
      {hit.title}
    </StyledArticleTitle>
    {O.isSome(hit.externalUrlDomain) && (
      <StyledLink href={`${HN_BASE_SEARCH_URL}${hit.externalUrlDomain.value}`}>
        {`(${hit.externalUrlDomain.value})`}
      </StyledLink>
    )}
  </RowLayout>
)

const NewsItemSecondRow = ({ hit }: { hit: TransformedHitResult }) => {
  const itemUrl = `${HN_BASE_ITEM_URL}${hit.id}`

  return (
    <StyledListSecondLine>
      <StyledSpan>{`${hit.points} points by `}</StyledSpan>
      <StyledLink href={`${HN_BASE_USER_URL}${hit.author}`}>
        {hit.author}
      </StyledLink>{' '}
      <StyledLink title={hit.createdAtISO} href={itemUrl}>
        {formatRelativeTimeFromISO(hit.createdAtISO)}
      </StyledLink>
      <TextDivide />
      <StyledLink href={itemUrl}>{`${hit.numComments} comments`}</StyledLink>
      <TextDivide />
      <SaveItemButton hit={hit} />
    </StyledListSecondLine>
  )
}

export const NewsItem = ({ hit }: { hit: TransformedHitResult }) => {
  return (
    <StyledLi key={hit.id}>
      <StyledListContent>
        <NewsItemFirstRow hit={hit} />
        <NewsItemSecondRow hit={hit} />
      </StyledListContent>
    </StyledLi>
  )
}
