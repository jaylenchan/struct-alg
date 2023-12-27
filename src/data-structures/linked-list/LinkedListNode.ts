export class LinkedListNode<V> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
