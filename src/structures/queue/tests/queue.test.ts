import { describe, it, expect } from 'bun:test'

import ArrayQueue from '../ArrayQueue'
import LinkedListQueue from '../LinkedListQueue'

describe('ArrayQueue', () => {
  it('getSize', () => {
    const queue = new ArrayQueue<number>()
    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.getSize()).toBe(2)
  })

  it('isEmpty', () => {
    const queue = new ArrayQueue<number>()

    expect(queue.isEmpty()).toBe(true)
  })

  it('enqueue', () => {
    const queue = new ArrayQueue<number>()
    queue.enqueue(1)

    expect(queue.getSize()).toBe(1)
  })

  it('dequeue', () => {
    const queue = new ArrayQueue<number>()
    queue.enqueue(1)
    queue.dequeue()

    expect(queue.getSize()).toBe(0)
  })

  it('getFront', () => {
    const queue = new ArrayQueue<number>()
    queue.enqueue(1)
    queue.getFront()

    expect(queue.getSize()).toBe(1)
  })
})

describe('LinkedListQueue', () => {
  it('', () => {
    const queue = new LinkedListQueue<number>()
    for (let i = 0; i < 10; i++) {
      queue.enqueue(i)

      if (i % 3 == 2) {
        queue.dequeue()
      }
    }
  })
})
