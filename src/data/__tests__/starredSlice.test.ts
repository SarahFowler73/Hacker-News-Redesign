import { TransformedHitResult } from '../../common/types'
import { starredSliceReducer, toggleStarred } from '../starredSlice'

describe('starredSlice', () => {
  test('starredSlice reducer toggle action should add values to state if not included', () => {
    expect(
      starredSliceReducer(
        { '1': { id: '1' } as TransformedHitResult },
        toggleStarred({ id: '2' } as TransformedHitResult),
      ),
    ).toMatchObject({ '1': { id: '1' }, '2': { id: '2' } })
  })

  test('starredSlice reducer toggle action should remove values from state if included', () => {
    expect(
      starredSliceReducer(
        {
          '1': { id: '1' } as TransformedHitResult,
          '2': { id: '2' } as TransformedHitResult,
        },
        toggleStarred({ id: '2' } as TransformedHitResult),
      ),
    ).toMatchObject({ '1': { id: '1' } })
  })
})
