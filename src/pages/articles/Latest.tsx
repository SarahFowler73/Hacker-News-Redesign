import { useInfiniteQuery } from '@tanstack/react-query'
import * as RA from 'fp-ts/ReadonlyArray'
import { pipe } from 'fp-ts/function'
import styled from 'styled-components'

import { Button } from '../../common/components/Button'
import { StyledOrderedList } from '../../common/components/List'
import { fetchLatest } from '../../data/data'
import { NewsItem } from './NewsItem'

const StyledButton = styled(Button)`
  margin: 1.5rem 2.5rem;
`

export const Latest = () => {
  const { isLoading, isError, fetchNextPage, error, data, isFetching } =
    useInfiniteQuery({
      queryKey: ['latest'],
      queryFn: fetchLatest,
      getNextPageParam: lastpage => lastpage.page + 1,
    })

  if (isLoading) {
    return <div>loading</div>
  } else if (isError) {
    return <div>error</div>
  } else if (data != null) {
    return (
      <div>
        <StyledOrderedList>
          {pipe(
            data.pages,
            RA.map(({ hits }) => hits),
            RA.flatten,
            RA.map(hit => <NewsItem key={hit.id} hit={hit} />),
          )}
        </StyledOrderedList>
        <StyledButton onClick={() => fetchNextPage()}>show more</StyledButton>
      </div>
    )
  } else {
    return null
  }
}
