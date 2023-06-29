import { renderHook, act } from '@testing-library/react'
import useOpenableComponent from './useOpenableComponent'

describe('useOpenableComponent', () => {
  it('should set the initial open state', () => {
    const initialState = true

    const { result } = renderHook(() => useOpenableComponent(initialState))

    expect(result.current.isOpen).toStrictEqual(initialState)
  })

  it('should set the open state to true with the returned open function', async () => {
    const { result } = renderHook(() => useOpenableComponent())

    await act(() => result.current.open())

    expect(result.current.isOpen).toStrictEqual(true)
  })

  it('should set the open state to false with the returned close function', async () => {
    const { result } = renderHook(() => useOpenableComponent(true))

    await act(() => result.current.close())

    expect(result.current.isOpen).toStrictEqual(false)
  })
})
