export interface IStack<T> {
  size: number
  isEmpty: () => boolean
  push: (e: T) => void
  pop: () => T | undefined
  peek: () => T | undefined
}
