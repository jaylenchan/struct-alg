import { expect, describe, it, beforeEach } from 'bun:test'

import { ArrayStack } from 'tsalg/data-structures/stack'

describe('ArrayStack', () => {
  let stack: ArrayStack<number>

  beforeEach(() => {
    stack = new ArrayStack<number>()
  })

  it('starts empty', () => {
    expect(stack.size).toEqual(0)
    expect(stack.isEmpty()).toEqual(true)
  })

  it('pushes elements', () => {
    stack.push(1)
    expect(stack.size).toEqual(1)

    stack.push(2)
    expect(stack.size).toEqual(2)

    stack.push(3)
    expect(stack.size).toEqual(3)

    expect(stack.isEmpty()).toEqual(false)
  })

  it('pops elements', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.pop()).toEqual(3)
    expect(stack.pop()).toEqual(2)
    expect(stack.pop()).toEqual(1)
    expect(stack.pop()).toEqual(undefined)
  })

  it('implements LIFO logic', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.pop()).toEqual(3)
    expect(stack.pop()).toEqual(2)
    expect(stack.pop()).toEqual(1)
    expect(stack.pop()).toEqual(undefined)
  })

  it('allows to peek at the top element in he stack without popping it', () => {
    expect(stack.peek()).toEqual(undefined)

    stack.push(1)
    expect(stack.peek()).toEqual(1)

    stack.push(2)
    expect(stack.peek()).toEqual(2)

    stack.pop()
    expect(stack.peek()).toEqual(1)
  })

  it('returns the correct getSize', () => {
    expect(stack.size).toEqual(0)

    stack.push(1)
    expect(stack.size).toEqual(1)

    stack.push(2)
    expect(stack.size).toEqual(2)

    stack.push(3)
    expect(stack.size).toEqual(3)

    stack.clear()
    expect(stack.isEmpty()).toEqual(true)

    stack.push(1)
    stack.push(2)
    stack.push(3)

    stack.pop()
    expect(stack.size).toEqual(2)

    stack.pop()
    expect(stack.size).toEqual(1)

    stack.pop()
    expect(stack.size).toEqual(0)

    stack.pop()
    expect(stack.size).toEqual(0)
  })

  it('returns if it is empty', () => {
    expect(stack.isEmpty()).toEqual(true)

    stack.push(1)
    expect(stack.isEmpty()).toEqual(false)

    stack.push(2)
    expect(stack.isEmpty()).toEqual(false)

    stack.push(3)
    expect(stack.isEmpty()).toEqual(false)

    stack.clear()
    expect(stack.isEmpty()).toEqual(true)

    stack.push(1)
    stack.push(2)
    stack.push(3)

    stack.pop()
    expect(stack.isEmpty()).toEqual(false)

    stack.pop()
    expect(stack.isEmpty()).toEqual(false)

    stack.pop()
    expect(stack.isEmpty()).toEqual(true)

    stack.pop()
    expect(stack.isEmpty()).toEqual(true)
  })

  it('clears the stack', () => {
    stack.clear()
    expect(stack.isEmpty()).toEqual(true)

    stack.push(1)
    stack.push(2)

    stack.clear()
    expect(stack.isEmpty()).toEqual(true)
  })

  it('returns an Array', () => {
    let ArrayStack = stack.toArray()
    expect(ArrayStack.length).toEqual(0)

    stack.push(1)
    stack.push(2)

    ArrayStack = stack.toArray()
    expect(ArrayStack.length).toEqual(2)

    let i = 1
    ArrayStack.forEach((e: number) => {
      expect(e).toEqual(i)
      i++
    })
  })

  it('returns toString primitive types', () => {
    expect(stack.toString()).toEqual('')

    stack.push(1)
    expect(stack.toString()).toEqual('1')

    stack.push(2)
    expect(stack.toString()).toEqual('1,2')

    stack.clear()
    expect(stack.toString()).toEqual('')

    const stackString = new ArrayStack<string>()
    
    stackString.push('el1')
    expect(stackString.toString()).toEqual('el1')

    stackString.push('el2')
    expect(stackString.toString()).toEqual('el1,el2')
  })

  it('returns toString objects', () => {
    class MyObj {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      constructor(public el1: any, public el2: any) {}
      public toString(): string {
        return `${this.el1.toString()}|${this.el2.toString()}`
      }
    }
    const stackMyObj = new ArrayStack<MyObj>()
    expect(stackMyObj.toString()).toEqual('')

    stackMyObj.push(new MyObj(1, 2))
    expect(stackMyObj.toString()).toEqual('1|2')

    stackMyObj.push(new MyObj(3, 4))
    expect(stackMyObj.toString()).toEqual('1|2,3|4')
  })
})
