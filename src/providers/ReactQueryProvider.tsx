import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ReactQuery's documentation suggests turning off retries for testing erroneous queries
      // https://tanstack.com/query/v4/docs/guides/testing#turn-off-retries
      retry: process.env.NODE_ENV !== 'test' ? 3 : false,
      refetchOnWindowFocus: false,
      staleTime: 20000, // 20 seconds
      cacheTime: 900000,
    },
  },
})

export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
