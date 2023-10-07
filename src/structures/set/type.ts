export interface ISet<E> {
  add(e: E): void
  remove(e: E): void
  contains(e: E): boolean
  getSize(): number
  isEmpty(): boolean
}
