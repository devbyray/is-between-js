import isBetween from '../src/is-between-js'

/**
 * Dummy test
 */
describe('isBetween test', () => {
  it('works if isBetween is truthy', () => {
    expect(isBetween).toBeDefined()
  })

  it('isBetween returns true', () => {
    expect(isBetween(10, 0, 100)).toBe(true)
    expect(isBetween(1, 0, 10)).toBe(true)
    expect(isBetween(-5, -10, 10)).toBe(true)
    expect(isBetween(1.2, 0, 2)).toBe(true)
    expect(isBetween(3.52, 3.52, 3.53)).toBe(true)
  })
  it('isBetween returns false', () => {
    expect(isBetween(10, 0, 9)).toBe(false)
  })
  it('isBetween returns error', () => {
    expect(() => isBetween(10, 15, 9)).toThrow()
  })
})
