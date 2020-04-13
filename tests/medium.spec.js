const { medium } = require('../src/index')

describe('Medium', () => {
  
  it('Return a number and nothing else', () => {
    expect(typeof medium(1, 3)).toBe('number')
  })
  
  it('Return the medium value of an odd list of numbers', () => {
    expect(medium(1, 3, 27, 5, 12)).toBe(5)
  })

  it('Return the medium value of an odd list of numbers', () => {
    expect(Number(medium(1, 3, 27, 5, 12, 10))).toBe(7.5)
  })

})