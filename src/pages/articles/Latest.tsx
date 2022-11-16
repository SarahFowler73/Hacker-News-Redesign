import { useInfiniteQuery } from '@tanstack/react-query'

const fetchLatest = ({ pageParam = 0 }) =>
  fetch(
    `https://hn.algolia.com/api/v1/search_by_date?hitsPerPage=12&page=${pageParam}`,
  ).then(res => res.json())

export const Latest = () => {
  const { isLoading, isError, fetchNextPage, error, data, isFetching } =
    useInfiniteQuery({
      queryKey: ['latest'],
      queryFn: fetchLatest,
      getNextPageParam: lastpage => ((lastpage as any).page as number) + 1,
    })

  console.log(data)

  if (isLoading) {
    return <div>loading</div>
  } else if (isError) {
    return <div>error</div>
  } else if (data != null) {
    return (
      <div>
        <ul>
          {data.pages.map(page =>
            page.hits.map((hit: any) => (
              <li>{hit.story_id + hit.story_title}</li>
            )),
          )}
        </ul>
        <button onClick={() => fetchNextPage()}>more</button>
      </div>
    )
  } else {
    return null
  }
}
