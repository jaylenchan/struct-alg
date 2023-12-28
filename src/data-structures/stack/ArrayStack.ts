import type { IStack } from './type'

export class ArrayStack<T> implements IStack<T> {
  private _array: Array<T>

  constructor() {
    this._array = []
  }

  public get size(): number {
    return this._array.length
  }

  public isEmpty(): boolean {
    return this._array.length === 0
  }

  public push(e: T): void {
    this._array.push(e)
  }

  public pop(): T | undefined {
    if (!this._array.length) {
      return undefined
    }
    return this._array.pop()!
  }

  public peek(): T | undefined {
    return this._array[this._array.length - 1]
  }

  public clear(): void {
    this._array = []
  }

  public toArray(): Array<T> {
    return this._array
  }

  public toString(): string {
    return this._array.toString()
  }
}

export default ArrayStack
