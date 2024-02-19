import type { ISegmentTree } from './type'

export class SegmentTree<E> implements ISegmentTree<E> {
  private _tree: E[]
  private _data: E[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _merger: (leftChild: E, rightChild: E) => any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(arr: E[], _merger: (leftChild: E, rightChild: E) => any) {
    this._tree = new Array(4 * arr.length).fill(null as E)
    this._data = new Array(arr.length).fill(null as E)
    this._merger = _merger

    for (let i = 0; i < arr.length; i++) {
      this._data[i] = arr[i]
    }

    this._buildSegmentTree(0, 0, this._data.length - 1)
  }

  public get(index: number): E {
    if (index < 0 || index >= this._data.length) {
      throw new Error('Index is illegal.')
    }
    return this._data[index]
  }

  public getSize(): number {
    return this._data.length
  }

  public toString(): string {
    let res = '['

    for (let i = 0; i < this._tree.length; i++) {
      if (this._tree[i] != null) {
        res += this._tree[i]
      } else {
        res += 'null'
      }

      if (i != this._tree.length - 1) {
        res += ', '
      }
    }

    res += ']'

    return res
  }

  public query(queryLeft: number, queryRight: number): E {
    if (queryLeft < 0 || queryRight < 0 || queryLeft >= this._data.length || queryRight >= this._data.length) {
      throw new Error('Index is illegal.')
    }

    return this._query(0, 0, this._data.length - 1, queryLeft, queryRight)
  }

  private _query(treeIndex: number, left: number, right: number, queryLeft: number, queryRight: number): E {
    if (left > right) throw new Error('_data is empty.')
    if (left == queryLeft && right == queryRight) {
      return this._tree[treeIndex]
    }

    const leftChildIndex = this._leftChild(treeIndex)
    const rightChildIndex = this._rightChild(treeIndex)
    const mid = left + Math.floor((right - left) >> 1)

    if (queryLeft >= mid + 1) {
      return this._query(rightChildIndex, mid + 1, right, queryLeft, queryRight)
    } else if (queryRight <= mid) {
      return this._query(leftChildIndex, left, mid, queryLeft, queryRight)
    } else {
      const leftResult = this._query(leftChildIndex, left, mid, queryLeft, mid)
      const rightResult = this._query(rightChildIndex, mid + 1, right, mid + 1, queryRight)

      return this._merger(leftResult, rightResult)
    }
  }

  private _buildSegmentTree(treeIndex: number, left: number, right: number): void {
    if (left > right) return // 空数组不进行线段树创建
    if (left == right) {
      // base case：如果左右区间相等，创建节点
      this._tree[treeIndex] = this._data[left]
      return
    }

    const leftChildIndex = this._leftChild(treeIndex)
    const rightChildIndex = this._rightChild(treeIndex)
    const mid = left + Math.floor((right - left) >> 1)

    this._buildSegmentTree(leftChildIndex, left, mid)
    this._buildSegmentTree(rightChildIndex, mid + 1, right)

    // 非base case，该节点需要依赖左右节点创建好之后，再来做节点创建的决策
    // 因此需要递归创建左右子树先
    this._tree[treeIndex] = this._merger(this._tree[leftChildIndex], this._tree[rightChildIndex])
  }

  private _leftChild(index: number): number {
    return 2 * index + 1
  }

  private _rightChild(index: number): number {
    return 2 * index + 2
  }
}
