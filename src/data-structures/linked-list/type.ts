export  interface ILinkedList<E> {
  getSize(): number
  isEmpty(): boolean
  add(index: number, e: E): void
  get(index: number): E
  set(index: number, e: E): void
  remove(index: number): E
  removeElement(e: E): void
  contains(e: E): boolean
}
