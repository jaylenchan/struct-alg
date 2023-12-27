import type { IStack } from './type'

export class ArrayStack<T> implements IStack<T> {
  private _array: Array<T>
  private _capacity: number

  constructor(capacity: number) {
    this._array = []
    this._capacity = capacity
  }

  public getSize(): number {
    return this._array.length
  }

  public isEmpty(): boolean {
    return this._array.length === 0
  }

  public push(e: T): void {
    if (this._array.length === this._capacity) {
      throw new Error('stack is full!')
    }
    this._array.push(e)
  }

  public pop(): T {
    if (!this._array.length) {
      throw new Error('stack is empty!')
    }
    return this._array.pop()!
  }

  public peek(): T {
    return this._array[this._array.length - 1]
  }
}

export default ArrayStack
