import { renderHook } from '@testing-library/react'
import useDebounce from './useDebounce'

const testString = 'testString'

describe('useDebounce', () => {
  it('should set the state value after 1000ms if delay is not provided', async () => {
    const { result } = renderHook(() =>
      useDebounce<string>({ value: testString })
    )

    expect(result.current).toStrictEqual(null)

    setTimeout(() => {
      expect(result.current).toStrictEqual(testString)
    }, 1000)
  })

  it('should set the state value after the provided delay if it is provided', async () => {
    const testDelay = 500

    const { result } = renderHook(() =>
      useDebounce<string>({ value: testString, delay: testDelay })
    )

    expect(result.current).toStrictEqual(null)

    setTimeout(() => {
      expect(result.current).toStrictEqual(testString)
    }, testDelay)
  })
})
