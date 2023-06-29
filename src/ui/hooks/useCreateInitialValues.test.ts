import { renderHook } from '@testing-library/react'
import useCreateInitialValues from './useCreateInitialValues'

describe('useCreateInitialValues', () => {
  it('should cast the values to the provided schema', () => {
    const castMock = jest.fn()
    const testValues = { firstValue: 'firstValue' }

    /** @ts-ignore - The whole of object schema is not defined. */
    renderHook(() => useCreateInitialValues({ cast: castMock }, testValues))

    expect(castMock).toHaveBeenCalledWith(testValues)
  })

  it('should return an empty object if values are not provided', () => {
    /** @ts-ignore - The whole of object schema is not defined. */
    const { result } = renderHook(() => useCreateInitialValues(jest.fn()))

    expect(result.current).toStrictEqual({})
  })
})
