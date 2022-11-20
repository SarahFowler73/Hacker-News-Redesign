import * as A from 'fp-ts/Array'
import * as O from 'fp-ts/Option'
import * as R from 'fp-ts/Record'
import { pipe } from 'fp-ts/lib/function'
import React from 'react'

import { StyledOrderedList } from '../../common/components/List'
import { TransformedHitResult } from '../../common/types'
import { selectStarred } from '../../data/selectors'
import { useAppSelector } from '../../data/store'
import { NewsItem } from './NewsItem'

export const Starred = () => {
  const starredItems = useAppSelector(selectStarred)

  return (
    <>
      <StyledOrderedList>
        {pipe(
          starredItems,
          R.toEntries,
          O.fromPredicate(A.isNonEmpty),
          O.fold<Array<[string, TransformedHitResult]>, React.ReactNode>(
            () => <div>No starred items</div>,
            A.map(([_, starredItem]) => (
              <NewsItem key={starredItem.id} hit={starredItem} />
            )),
          ),
        )}
      </StyledOrderedList>
    </>
  )
}
