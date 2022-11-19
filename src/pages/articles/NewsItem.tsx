import * as O from 'fp-ts/Option'
import styled, { css } from 'styled-components'

import { MonoStyles, SmallTextStyles } from '../../common/components/Typography'
import {
  HN_BASE_ITEM_URL,
  HN_BASE_SEARCH_URL,
  HN_BASE_USER_URL,
} from '../../common/constants'
import { formatRelativeTimeFromISO } from '../../common/formatTime'
import { TransformedHitResult } from '../../common/types'
import { selectGetIsStarredItem } from '../../data/selectors'
import { toggleStarred } from '../../data/starredSlice'
import { useAppDispatch, useAppSelector } from '../../data/store'

const StyledLi = styled.li(
  () => css`
    ${MonoStyles}
    color: ${({ theme }) =>
      `${theme.colors.text}${theme.colors.opacity['50']}`};
  `,
)

const StyledArticleTitle = styled.a(() => MonoStyles)
const StyledLink = styled.a(() => SmallTextStyles)
const StyledSpan = styled.span(() => SmallTextStyles)

export const NewsItem = ({ hit }: { hit: TransformedHitResult }) => {
  const dispatch = useAppDispatch()
  const isStarred = useAppSelector(selectGetIsStarredItem(hit.id))

  const itemUrl = `${HN_BASE_ITEM_URL}${hit.id}`

  const handleSaveItem = () => {
    dispatch(toggleStarred(hit))
  }

  return (
    <StyledLi key={hit.id}>
      <StyledArticleTitle href={hit.url} target={'_blank'} rel="noreferrer">
        {hit.title}
      </StyledArticleTitle>
      {O.isSome(hit.externalUrlDomain) && (
        <StyledLink
          href={`${HN_BASE_SEARCH_URL}${hit.externalUrlDomain.value}`}
        >
          {`(${hit.externalUrlDomain.value})`}
        </StyledLink>
      )}
      <StyledSpan as="p">
        <span>{`${hit.points} points by `}</span>
        <StyledLink href={`${HN_BASE_USER_URL}${hit.author}`}>
          {hit.author}
        </StyledLink>{' '}
        <StyledLink title={hit.createdAtISO} href={itemUrl}>
          {formatRelativeTimeFromISO(hit.createdAtISO)}
        </StyledLink>
        {' | '}
        <StyledLink href={itemUrl}>{`${hit.numComments} comments`}</StyledLink>
        {' | '}
        <button onClick={handleSaveItem}>
          {isStarred ? 'unsave' : 'save'}
        </button>
      </StyledSpan>
    </StyledLi>
  )
}
