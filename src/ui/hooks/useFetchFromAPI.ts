import { useCallback } from 'react'
import wretch from 'wretch'
import IFetchOptions from '../types/IFetchOptions'
import useCreateURLWithQueryString from './useCreateURLWithQueryString'

const useFetchFromAPI = (url: string) => {
  const createURLWithQueryString = useCreateURLWithQueryString(url)

  return useCallback(
    (fetchOptions?: IFetchOptions) => {
      const endpointURL = createURLWithQueryString(
        fetchOptions?.queryParameters
      )

      return wretch()
        .url(endpointURL)
        .headers(fetchOptions?.headers ?? {})
    },
    [createURLWithQueryString]
  )
}

export default useFetchFromAPI
