import { JArray as Array } from 'tsalg/structures'

import type { IQueue } from './type'

export class ArrayQueue<E> implements IQueue<E> {
  private _array: Array<E>

  constructor(capacity?: number) {
    this._array = new Array<E>(capacity)
  }

  public getSize(): number {
    return this._array.getSize()
  }

  public isFull(): boolean {
    return this.getSize() == this.getCapacity()
  }

  public isEmpty(): boolean {
    return this._array.isEmpty()
  }

  public enqueue(e: E): void {
    this._array.addLast(e)
  }

  public dequeue(): E {
    return this._array.removeFirst()
  }

  public getFront(): E {
    return this._array.getFirst()
  }

  public getCapacity(): number {
    return this._array.getCapacity()
  }
}
