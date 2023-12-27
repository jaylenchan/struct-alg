/*
 * @lc app=leetcode.cn id=622 lang=typescript
 *
 * [622] 设计循环队列
 */

// @lc code=start
class MyCircularQueue {
  private _data: number[]
  private _capacity: number
  private _size: number
  private _head: number
  private _tail: number

  constructor(k: number) {
    this._data = new Array(k).fill(Infinity)
    this._capacity = k
    this._size = 0
    this._head = 0
    this._tail = 0
  }

  public enQueue(value: number): boolean {
    if (this.isFull()) return false

    this._data[this._tail] = value
    this._tail = ++this._tail == this._capacity ? 0 : this._tail
    this._size++

    return true
  }

  public deQueue(): boolean {
    if (this.isEmpty()) return false

    this._head = ++this._head == this._capacity ? 0 : this._head
    this._size--

    return true
  }

  public Front(): number {
    if (this.isEmpty()) return -1

    return this._data[this._head]
  }

  public Rear(): number {
    if (this.isEmpty()) return -1

    const index = this._tail - 1 == -1 ? this._capacity - 1 : this._tail - 1

    return this._data[index]
  }

  public isEmpty(): boolean {
    return this._size == 0
  }

  public isFull(): boolean {
    return this._size == this._capacity
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

export { MyCircularQueue }
