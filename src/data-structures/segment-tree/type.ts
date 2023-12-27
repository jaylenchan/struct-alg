export  interface ISegmentTree<E> {
  get(index: number): E
  getSize(): number
  query(queryLeft: number, queryRight: number): E | null
}
