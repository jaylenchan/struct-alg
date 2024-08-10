/*
 * @lc app=leetcode.cn id=146 lang=typescript
 * @lcpr version=30204
 *
 * [146] LRU 缓存
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
class DNode {
  public key: number
  public value: number
  public prev: DNode | null
  public next: DNode | null

  constructor(key: number, value: number, prev?: DNode, next?: DNode) {
    this.key = key
    this.value = value
    this.prev = prev ?? null
    this.next = next ?? null
  }
}

class DoubleLikedList {
  private _dummyHead: DNode
  private _dummyTail: DNode

  constructor() {
    this._dummyHead = new DNode(-1, -1)
    this._dummyTail = new DNode(-1, -1)

    this._dummyHead.next = this._dummyTail
    this._dummyTail.prev = this._dummyHead
  }

  public add(node: DNode): void {
    const oldLast = this._dummyTail.prev!

    node.next = this._dummyTail
    this._dummyTail.prev = node

    node.prev = oldLast
    oldLast.next = node
  }

  public removeFirst(): DNode {
    const node = this._dummyHead.next!

    this._dummyHead.next = node.next

    node.next!.prev = this._dummyHead

    node.prev = null
    node.next = null

    return node
  }

  public remove(node: DNode): DNode {
    const prev = node.prev!

    const next = node.next!

    prev.next = next
    next.prev = prev

    node.prev = null
    node.next = null

    return node
  }

  public removeToLast(node: DNode): void {
    this.remove(node) // 需要先将node隔离开整条链表，否则会直接把node为头节点的链表一起带起来
    this.add(node)
  }

  public toString(): string {
    let str = ''
    let cur = this._dummyHead

    while (cur.next !== null) {
      str += `${cur.key}->`
      cur = cur.next
    }

    str += cur.key

    return str
  }
}

class LRUCache {
  private _capacity: number
  private _map: Map<number, DNode>
  private _list: DoubleLikedList

  constructor(_capacity: number) {
    this._capacity = _capacity
    this._map = new Map<number, DNode>()
    this._list = new DoubleLikedList()
  }

  public get(key: number): number {
    if (!this._map.has(key))
      return -1

    const node = this._map.get(key)!

    this._list.removeToLast(node)

    return node.value
  }

  public put(key: number, value: number): void {
    if (this._map.has(key)) {
      return this.set(key, value)
    }

    this.add(key, value)
  }

  public set(key: number, value: number): void {
    const node = this._map.get(key)!

    node.value = value
    this._list.removeToLast(node)
  }

  public add(key: number, value: number): void {
    const node = new DNode(key, value)

    if (this._capacity === this._map.size) {
      const delNode = this._list.removeFirst()
      this._map.delete(delNode.key)
    }

    this._map.set(key, node)
    this._list.add(node)
    this._list.removeToLast(node)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
export { LRUCache }
