export interface IHeap<E> {
  /** 返回堆中的元素个数 */
  size: () => number
  /** 返回堆是否为空 */
  isEmpty: () => boolean
  /** 向堆中添加元素 */
  add: (e: E) => void
  /** 看堆中的最大元素 */
  findMax: () => E
  /** 取出堆中的最大元素 */
  extractMax: () => E
}
