import { object } from 'yup'
import { renderHook } from '@testing-library/react'
import useCreateValidationSchema from './useCreateValidationSchema'

jest.mock('yup', () => ({
  ...jest.requireActual('yup'),
  object: jest.fn()
}))

const objectMock = object as jest.Mock

describe('useCreateValidationSchema', () => {
  it('should run the shape function with the provided constructor', () => {
    const shapeMock = jest.fn()
    objectMock.mockReturnValue({ shape: shapeMock })

    renderHook(() => useCreateValidationSchema(jest.fn()))

    expect(shapeMock).toHaveBeenCalled()
  })
})
