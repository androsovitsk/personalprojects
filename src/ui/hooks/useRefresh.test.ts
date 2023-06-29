import { renderHook, act } from '@testing-library/react'
import useRefresh from './useRefresh'

describe('useRefresh', () => {
  it('should return a refresh function that updates the timestamp', async () => {
    const { result } = renderHook(() => useRefresh())

    const desiredTimestamp = 12345678
    await act(() => result.current.refresh(desiredTimestamp))

    expect(result.current.timestamp).toStrictEqual(desiredTimestamp)
  })
})
