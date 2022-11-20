import { createSelector } from '@reduxjs/toolkit'
import * as R from 'fp-ts/Record'

import { RootState } from './store'

export const selectStarred = (state: RootState) => state.starred

/**
 * Takes a hit.id and returns a selector that determines if
 * the id is in starred item state
 */
export const selectGetIsStarredItem = (id: string) =>
  createSelector(selectStarred, starred => R.has(id, starred))
