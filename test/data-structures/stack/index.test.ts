import { expect, describe, test } from 'bun:test'

import { ArrayStack } from 'tsalg/index'

describe('test stack', () => {
  test('test array stack', () => {
    const stack = new ArrayStack<number>(10)

    stack.push(1)
    expect(stack.getSize()).toBe(1)
  })
})
