import * as O from 'fp-ts/Option'
import * as RA from 'fp-ts/ReadonlyArray'
import { pipe } from 'fp-ts/function'

import { DOMAIN_REGEX, HN_BASE_ITEM_URL } from '../common/constants'
import { isNil } from '../common/typeGuards'
import { TransformedHitResult, TransformedPageResult } from '../common/types'
import { HitResult, PageResult } from './apiTypes'

/**
 * Takes a raw json result and transforms it into the desired shape for the app
 */
export const transformHits = (
  hits: ReadonlyArray<HitResult>,
): ReadonlyArray<TransformedHitResult> =>
  pipe(
    hits,
    RA.filterMap(hit =>
      isNil(hit.title)
        ? O.none
        : O.some({
            url: hit.url ?? `${HN_BASE_ITEM_URL}${hit.objectID}`,
            title: hit.title ?? '',
            id: hit.objectID,
            author: hit.author,
            points: hit.points ?? 0,
            numComments: hit.num_comments ?? 0,
            createdAtISO: hit.created_at,
            externalUrlDomain: pipe(
              // Extract the domain from external urls for linking to ycombinator search
              DOMAIN_REGEX.exec(hit.url ?? ''),
              O.fromNullable,
              O.chain(RA.lookup(1)),
            ),
          }),
    ),
  )

/**
 * Fetch most recent hacker news items, paging 12 at a time, and transforms the result
 */
export const fetchLatest = ({ pageParam = 0 }) =>
  fetch(
    `https://hn.algolia.com/api/v1/search_by_date?tags=(story,poll,show_hn,ask_hn,front_page)&hitsPerPage=12&page=${pageParam}`,
  )
    .then<PageResult>(res => res.json())
    .then<TransformedPageResult>(res => ({
      page: res.page,
      hits: transformHits(res.hits),
    }))
