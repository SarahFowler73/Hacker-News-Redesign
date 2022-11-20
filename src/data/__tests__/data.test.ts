import { mockHitsData } from '../../mockData/mocks'
import { transformHits } from '../data'

describe('transformHits', () => {
  test('transformHits correctly transforms incoming hit data', () => {
    expect(transformHits(mockHitsData.slice(0, 2))).toMatchObject([
      {
        url: 'https://www.reuters.com/business/finance/collapsed-ftx-owes-nearly-31-bln-top-50-creditors-2022-11-20/',
        title: 'Collapsed FTX owes nearly $3.1B to top creditors',
        id: '33683684',
        author: 'mfiguiere',
        points: 1,
        numComments: 0,
        createdAtISO: '2022-11-20T18:26:36.000Z',
        externalUrlDomain: { _tag: 'Some', value: 'reuters.com' },
      },
      {
        url: 'https://www.howtogeek.com/734836/how-to-see-amazon-price-histories/',
        title: 'How to See the Amazon Price History of a Product',
        id: '33683651',
        author: 'evo_9',
        points: 1,
        numComments: 0,
        createdAtISO: '2022-11-20T18:23:32.000Z',
        externalUrlDomain: { _tag: 'Some', value: 'howtogeek.com' },
      },
    ])
  })
  test('transformHits correctly filters malformed hit data', () => {
    expect(
      transformHits([
        ...mockHitsData.slice(0, 1),
        { ...mockHitsData[1], title: null },
      ]),
    ).toHaveLength(1)
  })
})
