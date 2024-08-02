/*
 * @lc app=leetcode.cn id=707 lang=typescript
 * @lcpr version=30204
 *
 * [707] 设计链表
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
class LNode {
  public val: number
  public next: LNode | null
  public prev: LNode | null

  constructor(val: number) {
    this.val = val
    this.next = null
    this.prev = null
  }
}
class MyLinkedList {
  private _dummyHead: LNode
  private _dummyTail: LNode

  constructor() {
    this._dummyHead = new LNode(-1)
    this._dummyTail = new LNode(-1)

    this._dummyHead.next = this._dummyTail
    this._dummyTail.prev = this._dummyHead
  }

  public get(index: number): number {
    let cur = this._dummyHead.next
    let n = 0
    while (n < index && cur !== this._dummyTail) {
      cur = cur!.next
      n++
    }

    if (cur === this._dummyTail)
      return -1

    return cur!.val
  }

  public addAtHead(val: number): void {
    const oldNext = this._dummyHead.next
    const node = new LNode(val)

    this._dummyHead.next = node
    node.prev = this._dummyHead

    node.next = oldNext

    oldNext!.prev = node
  }

  public addAtTail(val: number): void {
    const oldPrev = this._dummyTail.prev
    const node = new LNode(val)

    this._dummyTail.prev = node
    node.next = this._dummyTail

    oldPrev!.next = node
    node.prev = oldPrev
  }

  public addAtIndex(index: number, val: number): void {
    if (index < 0)
      return this.addAtHead(val)

    let cur = this._dummyHead.next
    let n = 0

    while (n < index && cur !== this._dummyTail) {
      cur = cur!.next
      n++
    }

    if (cur === this._dummyTail && n < index)
      return

    const oldNode = cur!.prev
    const node = new LNode(val)

    oldNode!.next = node
    node.prev = oldNode

    node.next = cur

    cur!.prev = node
  }

  public deleteAtIndex(index: number): void {
    let cur = this._dummyHead.next
    let n = 0

    while (n < index && cur !== this._dummyTail) {
      cur = cur!.next
      n++
    }

    if (cur === this._dummyTail || n < index)
      return

    const delPrev = cur!.prev

    const delNext = cur!.next

    delPrev!.next = delNext

    delNext!.prev = delPrev

    cur!.prev = null

    cur!.next = null
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
export { MyLinkedList }
