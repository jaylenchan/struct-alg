import type { IMap } from './type'

class LNode<K, V> {
  public key: K | null
  public value: V | null
  public next: LNode<K, V> | null

  constructor(key: K | null = null, value: V | null = null, next: LNode<K, V> | null = null) {
    this.key = key
    this.value = value
    this.next = next
  }

  public toString(): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.key!.toString() + ' : ' + this.value!.toString()
  }
}

export class LinkedListMap<K, V> implements IMap<K, V> {
  private _dummyNode: LNode<K, V>
  private _size: number

  constructor() {
    this._dummyNode = new LNode<K, V>()
    this._size = 0
  }

  // 增
  public add(key: K, value: V): void {
    const node = this._getNode(key)

    if (node == null) {
      this._dummyNode.next = new LNode(key, value, this._dummyNode.next)
      this._size += 1
    } else {
      node.value = value
    }
  }

  public remove(key: K): V | null {
    let prev = this._dummyNode

    while (prev.next != null) {
      if (prev.next.key == key) {
        break
      }
      prev = prev.next
    }

    if (prev.next != null) {
      const removeNode = prev.next
      prev.next = removeNode.next
      removeNode.next = null

      return removeNode.value
    }

    return null
  }

  public contains(key: K): boolean {
    return this._getNode(key) != null
  }

  public get(key: K): V | null {
    const node = this._getNode(key)

    return node == null ? null : node.value
  }

  public set(key: K, newValue: V): void {
    const node = this._getNode(key)

    if (node == null) {
      throw new Error(`${key} doesn't exist!`)
    } else {
      node.value = newValue
    }
  }

  public getSize(): number {
    return this._size
  }

  public isEmpty(): boolean {
    return this._size == 0
  }

  private _getNode(key: K): LNode<K, V> | null {
    let cur = this._dummyNode.next

    while (cur != null) {
      if (cur.key == key) {
        return cur
      }

      cur = cur.next
    }

    return null
  }
}
