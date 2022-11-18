import { createSelector } from '@reduxjs/toolkit'
import * as R from 'fp-ts/Record'
import { RootState } from './store'

export const selectStarred = (state: RootState) => state.starred
export const selectGetIsStarredItem = (id: string) =>
  createSelector(selectStarred, starred => R.has(id, starred))
