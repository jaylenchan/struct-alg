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
