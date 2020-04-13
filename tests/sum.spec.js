const { sum } = require('../src/index')

describe('Sum', () => {
  
  it('Return a number and nothing else', () => {
    expect(typeof sum(1, 3)).toBe('number')
  })
  
  it('Return the right sum value of N numbers', () => {
    expect(sum(1, 3, 27, -1)).toBe(30)
  })

})