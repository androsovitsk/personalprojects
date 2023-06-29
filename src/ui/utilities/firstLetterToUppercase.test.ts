import firstLetterToUppercase from './firstLetterToUppercase'

describe('firstLetterToUppercase', () => {
  it('should return back an empty string when an empty string is provided', () => {
    const result = firstLetterToUppercase('')

    expect(result).toStrictEqual('')
  })

  it('should convert the first letter of a string to uppercase', () => {
    const result = firstLetterToUppercase('test string')

    expect(result).toStrictEqual('Test string')
  })
})
