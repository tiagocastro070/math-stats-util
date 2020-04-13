const { mode } = require('../src/index')

describe('Mode', () => {
  
  it('Return the mode value of a list of numbers', () => {
    expect(mode(1, 3, 1, 1, 2, 5)).toEqual([ '1' ])
  })

  it('Return more than one mode value of a list of numbers', () => {
    expect(mode(1, 1, 1, 4, 22, 1, 2, 22, 22, 22, 22, 1)).toEqual(['1', '22'])
  })

})