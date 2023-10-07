import { describe, it, expect } from 'bun:test'

import ArrayStack from '../ArrayStack'
import LinkedListStack from '../LinkedListStack'

describe('ArrayStack', () => {
  it('getSize', () => {
    const stack = new ArrayStack<number>()
    stack.push(1)
    stack.push(2)

    expect(stack.getSize()).toBe(2)
  })

  it('isEmpty', () => {
    const stack = new ArrayStack<number>()

    expect(stack.isEmpty()).toBe(true)
  })

  it('push', () => {
    const stack = new ArrayStack<number>()
    stack.push(1)

    expect(stack.getSize()).toBe(1)
  })

  it('pop', () => {
    const stack = new ArrayStack<number>()
    stack.push(1)
    stack.pop()

    expect(stack.getSize()).toBe(0)
  })

  it('peek', () => {
    const stack = new ArrayStack<number>()
    stack.push(1)
    stack.peek()

    expect(stack.getSize()).toBe(1)
  })
})

describe('LinkedListStack', () => {
  it('list stack', () => {
    const stack = new LinkedListStack<number>()
    for (let i = 0; i < 5; i++) {
      stack.push(i)
    }
    stack.pop()
  })
})
