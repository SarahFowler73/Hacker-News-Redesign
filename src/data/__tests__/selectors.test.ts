import { TransformedHitResult } from '../../common/types'
import { selectGetIsStarredItem } from '../selectors'

describe('selectGetIsStarredItem', () => {
  test('selectGetIsStarredItem should return true if id in state', () => {
    expect(
      selectGetIsStarredItem('1').resultFunc({
        '1': { id: '1' } as TransformedHitResult,
        '2': { id: '2' } as TransformedHitResult,
      }),
    ).toBe(true)
  })
  test('selectGetIsStarredItem should return false if id not in state', () => {
    expect(
      selectGetIsStarredItem('3').resultFunc({
        '1': { id: '1' } as TransformedHitResult,
        '2': { id: '2' } as TransformedHitResult,
      }),
    ).toBe(false)
  })
})
