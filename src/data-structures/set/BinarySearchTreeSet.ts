import { BinarySearchTree } from 'tsalg/data-structures/binary-search-tree'

import type { ISet } from './type'

export class BinarySearchTreeSet<E> implements ISet<E> {
  private _bst: BinarySearchTree<E>

  constructor() {
    this._bst = new BinarySearchTree<E>()
  }

  public add(e: E): void {
    this._bst.insert(e)
  }

  public remove(e: E): void {
    this._bst.remove(e)
  }

  public contains(e: E): boolean {
    return this._bst.contains(e)
  }

  public getSize(): number {
    return this._bst.size
  }

  public isEmpty(): boolean {
    return this._bst.isEmpty()
  }
}
