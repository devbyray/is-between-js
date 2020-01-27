import { between } from '../src/is-between-js'

/**
 * Dummy test
 */
describe('isBetween test', () => {
  it('works if isBetween is truthy', () => {
    expect(between).toBeDefined()
  })

  it('isBetween returns true', () => {
    expect(
      between(10)
        .min(0)
        .max(100)
        .calc()
    ).toBe(true)
    expect(
      between(1)
        .min(0)
        .max(10)
        .calc()
    ).toBe(true)
    expect(
      between(-5)
        .min(-10)
        .max(10)
        .calc()
    ).toBe(true)
    expect(
      between(1.2)
        .min(0)
        .max(2)
        .calc()
    ).toBe(true)
    expect(
      between(3.52)
        .min(3.52)
        .max(3.53)
        .calc()
    ).toBe(true)
  })
  it('isBetween returns false', () => {
    expect(
      between(10)
        .min(0)
        .max(9)
        .calc()
    ).toBe(false)
  })
  it('isBetween returns error', () => {
    expect(() =>
      between(10)
        .min(15)
        .max(9)
        .calc()
    ).toThrow()
  })
})
