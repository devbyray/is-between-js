import { Between, isBetween } from '../src/is-between-js'

/**
 * Dummy test
 */
describe('isBetween test', () => {
  it('works if isBetween is truthy', () => {
    expect(isBetween).toBeDefined()
    expect(Between).toBeDefined()
  })

  it('isBetween returns true', () => {
    expect(
      isBetween(10)
        .min(0)
        .max(100)
        .calc()
    ).toBe(true)
    expect(
      isBetween(1)
        .min(0)
        .max(10)
        .calc()
    ).toBe(true)
    expect(
      isBetween(-5)
        .min(-10)
        .max(10)
        .calc()
    ).toBe(true)
    expect(
      isBetween(1.2)
        .min(0)
        .max(2)
        .calc()
    ).toBe(true)
    expect(
      isBetween(3.52)
        .min(3.52)
        .max(3.53)
        .calc()
    ).toBe(true)
  })
  it('isBetween returns false', () => {
    expect(
      isBetween(10)
        .min(0)
        .max(9)
        .calc()
    ).toBe(false)
  })
  it('isBetween returns error', () => {
    expect(() =>
      isBetween(10)
        .min(15)
        .max(9)
        .calc()
    ).toThrow()
  })
})
