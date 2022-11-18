import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { pipe } from 'fp-ts/lib/function'
import * as R from 'fp-ts/Record'
import * as O from 'fp-ts/Option'
import { TransformedHitResult } from '../common/types'

type StarredState = Record<string, TransformedHitResult>

const initialState: StarredState = {}

export const starredSlice = createSlice({
  name: 'starred',
  initialState,
  reducers: {
    toggleStarred: (state, action: PayloadAction<TransformedHitResult>) => {
      return pipe(
        state,
        O.fromPredicate(_ => R.has(action.payload.id, state)), // check if item is stored in starred items
        O.fold(
          () => ({ ...state, [action.payload.id]: action.payload }), // if false, insert it
          _ => R.deleteAt(action.payload.id)(state), // if true, remove it
        ),
      )
    },
  },
})

export const { toggleStarred } = starredSlice.actions
export const starredSliceReducer = starredSlice.reducer
