export  interface IArray<E> {
  getSize(): number
  getCapacity(): number
  isEmpty(): boolean
  add(index: number, e: E): void
  contains(e: E): boolean
  find(e: E): number
  get(index: number): E
  set(index: number, e: E): void
  remove(index: number): E
  removeElement(e: E): void
  swap(i: number, j: number): void
}
