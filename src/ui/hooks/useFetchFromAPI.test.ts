import { renderHook } from '@testing-library/react'
import useFetchFromAPI from './useFetchFromAPI'
import fetchMock from 'fetch-mock'

const url = 'http://localhost:3000/testEndpoint'

describe('useFetchFromAPI', () => {
  beforeEach(() => {
    fetchMock.get(`begin:${url}`, 200, { overwriteRoutes: true })
  })

  it('should send a request to the provided endpoint', async () => {
    const { result } = renderHook(() => useFetchFromAPI(url))

    await result.current().get()
    expect(fetchMock.lastUrl()).toStrictEqual(url)
  })

  it('should add the provided headers to the request', async () => {
    const testHeaders = { Authentication: 'Bearer testToken' }

    const { result } = renderHook(() => useFetchFromAPI(url))

    await result.current({ headers: testHeaders }).get()
    expect(fetchMock.lastCall()[1].headers).toStrictEqual(testHeaders)
  })

  it('should add the provided query parameters to the url', async () => {
    const { result } = renderHook(() => useFetchFromAPI(url))

    await result.current({ queryParameters: { page: '0' } }).get()
    expect(fetchMock.lastUrl()).toStrictEqual(`${url}?page=0`)
  })
})
