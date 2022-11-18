import * as O from 'fp-ts/Option'
import * as Eq from 'fp-ts/Eq'
import * as Str from 'fp-ts/string'
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

export const TransformedHitResultEq = Eq.contramap(
  (hit: TransformedHitResult) => hit.id,
)(Str.Eq)
