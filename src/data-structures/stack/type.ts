export interface IStack<T> {
  getSize(): number
  isEmpty(): boolean
  push(e: T): void
  pop(): T
  peek(): T
}
