const { average } = require('../src/index')

describe('Average', () => {
  
  it('Return a number and nothing else', () => {
    expect(typeof average(1, 3)).toBe('number')
  })
  
  it('Return the right average value of two numbers', () => {
    expect(average(1, 3)).toBe(2)
  })

  it('Return the right average value of three numbers', () => {
    expect(Number(average(1, 10, 15).toFixed(2))).toBe(8.67)
  })

})