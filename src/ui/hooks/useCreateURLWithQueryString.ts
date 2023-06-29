import { useCallback } from 'react'
import { isEmpty } from 'ramda'
import IFetchOptions from '../types/IFetchOptions'
import qs from 'querystringify'

const useCreateURLWithQueryString = (url: string) => {
  return useCallback(
    (queryParameters: IFetchOptions['queryParameters']) => {
      const generatedQueryString = qs.stringify(queryParameters, true)

      if (isEmpty(generatedQueryString)) {
        return url
      }

      return `${url}${generatedQueryString}`
    },
    [url]
  )
}

export default useCreateURLWithQueryString
