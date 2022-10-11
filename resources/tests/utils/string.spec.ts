import * as string from '../../utils/string'

describe('Testing the string utility library', () => {
  test('Hyphens should be removed from a string', () => {
    // What are our values?
    const phrase = 'This is a string that needs to be truncated down'
    const correct = 'This is a string that needs to be t...'
    // What do we expect to happen?
    expect(string.truncate(phrase, 35)).toEqual(correct)
  })

  test('Hyphens should be removed from a string', () => {
    // What are our values?
    const phrase = 'This-will-test-the-function'
    const correct = 'This will test the function'
    // What do we expect to happen?
    expect(string.removeHyphens(phrase)).toEqual(correct)
  })

  test('The first letter of each word should be capitalized', () => {
    // What are our values?
    const phrase = 'this will test the function'
    const correct = 'This Will Test The Function'
    // What do we expect to happen?
    expect(string.toTitleCase(phrase)).toEqual(correct)
  })

  test('hyphens should be removed from a string', () => {
    const phrase = 'this will test the function'
    const correct = 'This will test the function'
    expect(string.ucFirst(phrase)).toEqual(correct)
  })
})
