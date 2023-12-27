import { describe, it, expect } from 'bun:test'

import { Comparable } from '../comparator'

describe('Comparable', () => {
  it('should compare with default comparator function', () => {
    const comparator = new Comparable()

    expect(comparator.aEqualTob(0, 0)).toBe(true)
    expect(comparator.aEqualTob(0, 1)).toBe(false)
    expect(comparator.aEqualTob('a', 'a')).toBe(true)
    expect(comparator.aLessThanb(1, 2)).toBe(true)
    expect(comparator.aLessThanb(-1, 2)).toBe(true)
    expect(comparator.aLessThanb('a', 'b')).toBe(true)
    expect(comparator.aLessThanb('a', 'ab')).toBe(true)
    expect(comparator.aLessThanb(10, 2)).toBe(false)
    expect(comparator.aLessThanOrEqualTob(10, 2)).toBe(false)
    expect(comparator.aLessThanOrEqualTob(1, 1)).toBe(true)
    expect(comparator.aLessThanOrEqualTob(0, 0)).toBe(true)
    expect(comparator.aGreaterThanb(0, 0)).toBe(false)
    expect(comparator.aGreaterThanb(10, 0)).toBe(true)
    expect(comparator.aGreaterThanOrEqualTob(10, 0)).toBe(true)
    expect(comparator.aGreaterThanOrEqualTob(10, 10)).toBe(true)
    expect(comparator.aGreaterThanOrEqualTob(0, 10)).toBe(false)
  })

  it('should compare with custom comparator function', () => {
    const comparator = new Comparable((a: string, b) => {
      if (a.length === b.length) {
        return 0
      }

      return a.length < b.length ? -1 : 1
    })

    expect(comparator.aEqualTob('a', 'b')).toBe(true)
    expect(comparator.aEqualTob('a', '')).toBe(false)
    expect(comparator.aLessThanb('b', 'aa')).toBe(true)
    expect(comparator.aGreaterThanOrEqualTob('a', 'aa')).toBe(false)
    expect(comparator.aGreaterThanOrEqualTob('aa', 'a')).toBe(true)
    expect(comparator.aGreaterThanOrEqualTob('a', 'a')).toBe(true)
  })
})
