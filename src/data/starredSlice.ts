import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as O from 'fp-ts/Option'
import * as R from 'fp-ts/Record'
import { pipe } from 'fp-ts/lib/function'

import { TransformedHitResult } from '../common/types'

/* This state shape was a bit of a trade-off. Ideally, if I managed the api, I would allow a bulk 'by-id' request, 
which would allow me to save only the `objectID`s in a set. The way the api is actually written, each item would need 
to be accessed by a separate request, which would be awful performance at a larger number of saved items. Saving the entire 
hit to state in this toy example works fine, since there is no persistence of data outside of the current session, so any
hit that is saved must be one that was already fetched in a "latest" query. 
*/

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
