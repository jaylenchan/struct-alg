export interface ILinkedList<E> {
  getSize: () => number
  isEmpty: () => boolean
  add: (index: number, e: E) => void
  get: (index: number) => E
  set: (index: number, e: E) => void
  remove: (index: number) => E
  removeElement: (e: E) => void
  contains: (e: E) => boolean
}

export class LinkedListNode<V> {
  public static readonly None = new LinkedListNode<any>(null)

  public value: V
  public next: LinkedListNode<V>

  constructor(value: V) {
    this.value = value
    this.next = LinkedListNode.None
  }

  public toString(): string {
    return `${this.value}`
  }
}
