import { describe, it, expect } from 'bun:test'

import BinarySearchTree from '..'

describe('BinarySearchTree', () => {
  it('should create binary search tree', () => {
    const bst = new BinarySearchTree()

    expect(bst).toBeDefined()
    expect(bst.root).toBeDefined()
    expect(bst.root.value).toBeNull()
    expect(bst.root.left).toBeUndefined()
    expect(bst.root.right).toBeUndefined()
  })

  it('should insert values', () => {
    const bst = new BinarySearchTree()

    bst.insert(10)
    bst.insert(20)
    bst.insert(5)

    expect(bst.toString()).toBe('5,10,20')
  })

  it('should check if value exists', () => {
    const bst = new BinarySearchTree()

    bst.insert(10)
    bst.insert(20)
    bst.insert(5)

    expect(bst.contains(20)).toBe(true)
    expect(bst.contains(40)).toBe(false)
  })

  it('should remove nodes', () => {
    const bst = new BinarySearchTree()

    bst.insert(10)
    bst.insert(20)
    bst.insert(5)

    expect(bst.toString()).toBe('5,10,20')

    const removed1 = bst.remove(5)

    expect(bst.toString()).toBe('10,20')
    expect(removed1).toBe(true)

    const removed2 = bst.remove(20)

    expect(bst.toString()).toBe('10')
    expect(removed2).toBe(true)
  })

  it('should insert object values', () => {
    const nodeValueCompareFunction = (
      a: { value: number },
      b: { value: number }
    ): 1 | 0 | -1 => {
      const normalizedA = a || { value: null }
      const normalizedB = b || { value: null }

      if (normalizedA.value === normalizedB.value) {
        return 0
      }

      return normalizedA.value < normalizedB.value ? -1 : 1
    }

    const obj1 = { key: 'obj1', value: 1, toString: (): string => 'obj1' }
    const obj2 = { key: 'obj2', value: 2, toString: (): string => 'obj2' }
    const obj3 = { key: 'obj3', value: 3, toString: (): string => 'obj3' }

    const bst = new BinarySearchTree(nodeValueCompareFunction)

    bst.insert(obj2)
    bst.insert(obj3)
    bst.insert(obj1)

    expect(bst.toString()).toBe('obj1,obj2,obj3')
  })

  it('should be traversed to sorted array', () => {
    const bst = new BinarySearchTree()

    bst.insert(10)
    bst.insert(-10)
    bst.insert(20)
    bst.insert(-20)
    bst.insert(25)
    bst.insert(6)

    expect(bst.toString()).toBe('-20,-10,6,10,20,25')

    bst.insert(4)

    expect(bst.toString()).toBe('-20,-10,4,6,10,20,25')
  })
})
