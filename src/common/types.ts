import * as O from 'fp-ts/Option'
import { PageResult } from '../data/apiTypes'

export type TransformedHitResult = {
  url: string
  externalUrlDomain: O.Option<string>
  title: string
  author: string
  id: string
  points: number
  numComments: number
  createdAtISO: string
}

export type TransformedPageResult = Pick<PageResult, 'page'> & {
  hits: ReadonlyArray<TransformedHitResult>
}
