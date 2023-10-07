import MaxHeap from '../heap/MaxHeap';

import type { IQueue } from './type';

export class PriorityQueue<E> implements IQueue<E> {
  private _maxHeap: MaxHeap<E>;

  constructor() {
    this._maxHeap = new MaxHeap<E>();
  }

  public getSize(): number {
    return this._maxHeap.size();
  }

  public isEmpty(): boolean {
    return this._maxHeap.isEmpty();
  }

  public enqueue(e: E): void {
    this._maxHeap.add(e);
  }

  public dequeue(): E {
    return this._maxHeap.extractMax();
  }

  public getFront(): E {
    return this._maxHeap.findMax();
  }
}
