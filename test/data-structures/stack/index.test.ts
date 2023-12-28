import { expect, describe, test } from 'bun:test'

import { stackImpl } from 'tsalg/index'

describe('ArrayStack', () => {
  const { ArrayStack } = stackImpl

  test('ArrayStack不为空', () => {
    const stack = new ArrayStack<number>(10)

    stack.push(1)

    expect(stack.getSize()).toBe(1)
  })
})

describe('LinkedListStack', () => {
  const { LinkedListStack } = stackImpl

  test('LinkedListStack不为空', () => {
    const stack = new LinkedListStack<number>()

    stack.push(1)

    expect(stack.getSize()).toBe(1)
  })
})
