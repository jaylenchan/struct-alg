import type { ILinkedList } from './type'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class LNode<E = any> {
  public value: E
  public next: LNode<E> | null

  constructor(value: E, next?: LNode<E> | null) {
    this.value = value
    this.next = next || null
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class LinkedList<E = any> implements ILinkedList<E> {
  private _dummyHead: LNode<E>
  private _size: number

  constructor() {
    this._dummyHead = new LNode('dummyNode' as E, null)
    this._size = 0
  }

  public getSize(): number {
    return this._size
  }

  public isEmpty(): boolean {
    return this._size == 0
  }

  // 在链表中间添加节点
  // 要在index处放置e，就要遍历到index-1处的元素，在index-1处的元素后边放置新元素
  // 设置prev指针，要遍历到index-1,只需要遍历index-2次，因为每次操作是prev = prev.next;从当前prev往下跑一个地方
  public add(index: number, e: E): void {
    if (index < 0 || index > this._size) {
      throw new Error('Add failed. Illegal index.')
    }

    let prev = this._dummyHead // 指向0索引元素之前的那个虚拟头节点
    for (let i = 0; i < index; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      prev = prev.next!
    }
    prev.next = new LNode(e, prev.next)
    this._size += 1
  }

  public addFrist(e: E): void {
    this.add(0, e)
  }

  public addLast(e: E): void {
    this.add(this._size, e)
  }

  // 查
  public get(index: number): E {
    if (this.isEmpty()) {
      throw new Error('Add failed. list is empty.')
    }
    if (index < 0 || index >= this._size) {
      throw new Error('Get failed. Index is illegal.')
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    let cur = this._dummyHead.next!

    for (let i = 0; i < index; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      cur = cur.next!
    }

    return cur.value
  }

  public getFirst(): E {
    return this.get(0)
  }

  public getLast(): E {
    return this.get(this._size - 1)
  }

  // 查找链表当中是否有元素e
  public contains(e: E): boolean {
    let cur = this._dummyHead.next

    while (cur != null) {
      if (cur.value == e) return true
      cur = cur.next
    }

    return false
  }

  // 改
  public set(index: number, e: E): void {
    if (index < 0 || index >= this._size) {
      throw new Error('Set failed. Index is illegal.')
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    let cur = this._dummyHead.next!

    for (let i = 0; i < index; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      cur = cur.next!
    }
    cur.value = e
  }

  public remove(index: number): E {
    if (index < 0 || index >= this._size) {
      throw new Error('Get failed. Index is illegal.')
    }

    let prev = this._dummyHead

    for (let i = 0; i < index; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      prev = prev.next! // 找到待删除节点的前边那个节点
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const target = prev.next!
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    prev.next = target!.next!
    target.next = null

    this._size -= 1

    return target.value
  }

  public removeFirst(): E {
    return this.remove(0)
  }

  public removeLast(): E {
    return this.remove(this._size - 1)
  }

  public removeElement(e: E): void {
    let prev = this._dummyHead
    while (prev.next != null) {
      if (prev.next.value == e) {
        break
      }
      prev = prev.next
    }
    if (prev.next != null) {
      const delNode = prev.next
      prev.next = delNode.next
      delNode.next = null
    }
  }

  /**
   * 返回链表的中点或者上中点（奇数中点 | 偶数上中点）
   */
  public getMidOrUpMidNode(head: LNode<E> | null): LNode<E> | null {
    /**
     * 处理0 | 1 | 2 个节点的情况
     * # head == null ： 链表不存在吗？
     * # head.next == null ： 链表没法走一步吗？（暗示除了头结点，还有1个节点）
     * # head.next.next == null ： 链表没法走两步吗？（暗示除了头结点，还有2个节点）
     */
    if (head == null || head.next == null || head.next.next == null) {
      return head
    }

    /**
     * # 链表至少能在头节点开始往前走出两步（暗示逻辑走到这里， 至少3个节点）
     * 从这里开始考虑，就可以让快指针fast大胆的走出两步
     *
     * @起始位置-定制
     * @slow从头结点出发，先走一步（来到第2个节点）
     * @fast从头节点出发，先走两步（来到第3个节点）
     */
    let slow = head.next
    let fast = head.next.next

    // 循环不变量：站在fast所在位置，能够不断往下走两步
    while (fast.next && fast.next.next) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      slow = slow.next!
      fast = fast.next.next
    }

    return slow
  }

  /**
   * 返回链表的中点或者上中点的前一个点（奇数中点 | 偶数上中点）
   */
  public getfMidOrUpMidNodePrev(head: LNode<E> | null): LNode<E> | null {
    /**
     * 处理0 | 1 | 2 个节点的情况
     * # head == null ： 链表不存在吗？
     * # head.next == null ： 链表没法走一步吗？（暗示除了头结点，还有1个节点）
     * # head.next.next == null ： 链表没法走两步吗？（暗示除了头结点，还有2个节点）
     */
    if (head == null || head.next == null || head.next.next == null) {
      return null
    }

    /**
     * # 链表至少能在头节点开始往前走出两步（暗示逻辑走到这里， 至少3个节点）
     * 从这里开始考虑，就可以让快指针fast大胆的走出两步
     *
     * @起始位置-定制
     * @slow从头结点出发
     * @fast从头节点出发，先走两步（来到第3个节点）
     */
    let slow = head
    let fast = head.next.next

    while (fast.next != null && fast.next.next != null) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      slow = slow.next!
      fast = fast.next.next
    }

    return slow
  }

  /**
   * 返回链表的中点或者下中点（奇数中点 | 偶数下中点）
   */
  public getMidOrDownMidNode(head: LNode<E> | null): LNode<E> | null {
    /**
     * 处理 0 | 1个节点的情况
     * # head == null 链表不存在吗？
     * # head.next == null 站在链表的头节点，能往下走一步吗？（来到第2个点）
     */
    if (head == null || head.next == null) {
      return head
    }

    /**
     * # 链表至少能在头结点出发走出一步（暗示逻辑走到这里至少有2个点）
     *
     * @起始位置-定制
     * @slow从头结点出发，先走一步（来到第2个节点）
     * @fast从头节点出发，先走一步（来到第2个节点）
     */
    let slow = head.next
    let fast = head.next

    // 循环不变量：站在fast所在位置，能够不断往下走两步
    while (fast.next && fast.next.next) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      slow = slow.next!
      fast = fast.next.next
    }

    return slow
  }

  /**
   * 返回链表的中点或者下中点的上一个点（奇数中点 | 偶数下中点）
   */
  public getfMidOrDownMidNodePrev(head: LNode<E> | null): LNode<E> | null {
    /**
     * 处理0 | 1 | 2 个节点的情况
     * # head == null ： 链表不存在吗？
     * # head.next == null ： 链表没法走一步吗？（暗示除了头结点，还有1个节点）
     * # head.next.next == null ： 链表没法走两步吗？（暗示除了头结点，还有2个节点）
     */
    if (head == null || head.next == null) {
      return null
    }

    /**
     * # 链表至少能在头节点开始往前走出两步（暗示逻辑走到这里， 至少3个节点）
     * 从这里开始考虑，就可以让快指针fast大胆的走出两步
     *
     * @起始位置-定制
     * @slow从头结点出发,先走一步（来到第2个节点）
     * @fast从头节点出发，先走一步（来到第2个节点）
     */
    let slow = head
    let fast = head.next

    while (fast.next != null && fast.next.next != null) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      slow = slow.next!
      fast = fast.next.next
    }

    return slow
  }

  public toString(): string {
    let res = ''
    let cur = this._dummyHead.next

    while (cur != null) {
      res += `${cur.value}->`
      cur = cur.next
    }

    res += 'NULL'

    return res
  }
}
