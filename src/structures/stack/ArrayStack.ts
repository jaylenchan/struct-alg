import { JArray as Array } from 'tsalg/structures'

import type { IStack } from './type'

export class ArrayStack<T> implements IStack<T> {
  private _array: Array<T>
  constructor(capacity?: number) {
    this._array = new Array(capacity)
  }

  public getSize(): number {
    return this._array.getSize()
  }

  public isEmpty(): boolean {
    return this._array.isEmpty()
  }

  public push(e: T): void {
    this._array.addLast(e)
  }

  public pop(): T {
    return this._array.removeLast()
  }

  public peek(): T {
    return this._array.getLast()
  }
}

export default ArrayStack
