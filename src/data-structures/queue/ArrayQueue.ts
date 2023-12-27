import type { IQueue } from './type'

export class ArrayQueue<E> implements IQueue<E> {
  private _array: Array<E>
  private _capacity: number

  constructor(capacity: number) {
    this._array = []
    this._capacity = capacity
  }

  public getSize(): number {
    return this._array.length
  }

  public isFull(): boolean {
    return this._capacity === this._array.length
  }

  public isEmpty(): boolean {
    return this._array.length === 0
  }

  public enqueue(e: E): void {
    if (this._capacity === this._array.length) {
      throw new Error('queue is full!')
    }
    this._array.push(e)
  }

  public dequeue(): E {
    if (!this._array.length) {
      throw new Error('queue is empty!')
    }
    return this._array.shift()!
  }

  public getFront(): E {
    return this._array[0]
  }

  public getCapacity(): number {
    return this._capacity
  }
}
