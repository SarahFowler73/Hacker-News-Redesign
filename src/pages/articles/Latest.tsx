import { useInfiniteQuery } from '@tanstack/react-query'
import { pipe } from 'fp-ts/function'
import * as RA from 'fp-ts/ReadonlyArray'
import { fetchLatest } from '../../data/data'
import { NewsItem } from './NewsItem'

export const Latest = () => {
  const { isLoading, isError, fetchNextPage, error, data, isFetching } =
    useInfiniteQuery({
      queryKey: ['latest'],
      queryFn: fetchLatest,
      getNextPageParam: lastpage => lastpage.page + 1,
    })

  console.log(data)

  if (isLoading) {
    return <div>loading</div>
  } else if (isError) {
    return <div>error</div>
  } else if (data != null) {
    return (
      <div>
        <ol>
          {pipe(
            data.pages,
            RA.map(({ hits }) => hits),
            RA.flatten,
            RA.map(hit => <NewsItem hit={hit} />),
          )}
        </ol>
        <button onClick={() => fetchNextPage()}>more</button>
      </div>
    )
  } else {
    return null
  }
}
