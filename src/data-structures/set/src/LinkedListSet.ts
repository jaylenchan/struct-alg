import { LinkedList } from 'tsalg/data-structures/linked-list'

import type { ISet } from './type'

export class LinkedListSet<E> implements ISet<E> {
  private _list: LinkedList<E>

  constructor() {
    this._list = new LinkedList<E>()
  }

  public add(e: E): void {
    if (!this._list.contains(e)) {
      this._list.addFrist(e)
    }
  }

  public remove(e: E): void {
    this._list.removeElement(e)
  }

  public contains(e: E): boolean {
    return this._list.contains(e)
  }

  public getSize(): number {
    return this._list.getSize()
  }

  public isEmpty(): boolean {
    return this._list.isEmpty()
  }
}
