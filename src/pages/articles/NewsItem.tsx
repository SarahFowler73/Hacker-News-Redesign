import * as O from 'fp-ts/Option'

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

export const NewsItem = ({ hit }: { hit: TransformedHitResult }) => {
  const dispatch = useAppDispatch()
  const isStarred = useAppSelector(selectGetIsStarredItem(hit.id))

  const itemUrl = `${HN_BASE_ITEM_URL}${hit.id}`

  const handleSaveItem = () => {
    dispatch(toggleStarred(hit))
  }

  return (
    <li key={hit.id}>
      <a href={hit.url} target={'_blank'} rel="noreferrer">
        {hit.title}
      </a>
      {O.isSome(hit.externalUrlDomain) && (
        <a href={`${HN_BASE_SEARCH_URL}${hit.externalUrlDomain.value}`}>
          {`(${hit.externalUrlDomain.value})`}
        </a>
      )}
      <p>
        <span>{`${hit.points} points by `}</span>
        <a href={`${HN_BASE_USER_URL}${hit.author}`}>{hit.author}</a>{' '}
        <a title={hit.createdAtISO} href={itemUrl}>
          {formatRelativeTimeFromISO(hit.createdAtISO)}
        </a>
        {' | '}
        <a href={itemUrl}>{`${hit.numComments} comments`}</a>
        {' | '}
        <button onClick={handleSaveItem}>
          {isStarred ? 'unsave' : 'save'}
        </button>
      </p>
    </li>
  )
}
