import type { IQueue } from 'ts/structures/queue/common/queue'

export class LoopQueue<E> implements IQueue<E> {
  private _tails: E[]
  private _size: number
  private _front: number
  private _tail: number

  constructor(capacity?: number) {
    this._tails = new Array(capacity ? capacity + 1 : 11).fill(new Object() as E)
    this._size = 0
    this._front = 0
    this._tail = 0
  }

  public getSize(): number {
    return this._size
  }

  public isFull(): boolean {
    return (this._tail + 1) % this._tails.length === this._front
  }

  public isEmpty(): boolean {
    return this._front === (this._tail + 1) % this._tails.length
  }

  // 入队
  public enqueue(e: E): void {
    if (this.isFull()) {
      this._resize(this.getCapacity() * 2)
    }

    this._tails[this._tail] = e
    this._tail = this._tail + 1
    this._size += 1
  }

  // 出队
  public dequeue(): E {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from an empty queue')
    }
    const result = this._tails[this._front]

    this._front = (this._front + 1) % this._tails.length
    this._size -= 1

    if (this._size === this.getCapacity() / 4 && this.getCapacity() / 2 !== 0) {
      this._resize(this.getCapacity() / 2)
    }
    return result
  }

  public getFront(): E {
    if (this.isEmpty()) {
      throw new Error('Queue is empty.')
    }
    return this._tails[this._front]
  }

  public getCapacity(): number {
    return this._tails.length - 1
  }

  private _resize(newCapacity: number): void {
    const array = new Array(newCapacity + 1).fill(new Object() as E)
    for (let i = 0; i < this._size; i++) {
      array[i] = this._tails[(i + this._front) % this._tails.length]
    }
    this._tails = array
    this._front = 0
    this._tail = this._size
  }
}
