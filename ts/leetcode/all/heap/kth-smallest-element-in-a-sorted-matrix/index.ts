/*
 * @lc app=leetcode.cn id=378 lang=typescript
 * @lcpr version=30204
 *
 * [378] 有序矩阵中第 K 小的元素
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
class MaxHeap {
  private _size: number
  private _data: number[]

  constructor() {
    this._data = []
    this._size = 0
  }

  public getSize(): number {
    return this._size
  }

  public peek(): number {
    return this._data[0]
  }

  public insert(item: number): void {
    this._data[this._size++] = item
    this._swim(this._size - 1)
  }

  public delMax(): number {
    const max = this._data[0]

    this._swap(0, this._size - 1)
    this._data.pop()
    this._size--
    this._sink(0)

    return max
  }

  private _swim(index: number): void {
    while (this._data[this._parent(index)] < this._data[index]) {
      this._swap(index, this._parent(index))
      index = this._parent(index)
    }
  }

  private _sink(index: number): void {
    while (this._left(index) < this._size) {
      let maxIndex = this._left(index)
      const _right = this._right(index)

      if (_right < this._size) {
        maxIndex = this._data[maxIndex] > this._data[_right] ? maxIndex : _right
      }

      if (this._data[maxIndex] < this._data[index])
        break

      this._swap(maxIndex, index)

      index = maxIndex
    }
  }

  private _parent(index: number): number {
    return Math.floor((index - 1) / 2)
  }

  private _left(index: number): number {
    return 2 * index + 1
  }

  private _right(index: number): number {
    return 2 * index + 2
  }

  private _swap(i: number, j: number): void {
    ;[this._data[i], this._data[j]] = [this._data[j], this._data[i]]
  }
}

function kthSmallest(matrix: number[][], k: number): number {
  if (matrix.length === 0 || matrix[0].length === 0)
    return 0

  const heap = new MaxHeap()
  let count = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (count === k) {
        if (heap.peek() > matrix[i][j]) {
          heap.delMax()
          heap.insert(matrix[i][j])
        }
      }
      else {
        heap.insert(matrix[i][j])
        count++
      }
    }
  }
  return heap.delMax()
}
// @lc code=end

/*
// @lcpr case=start
// [[1,5,9],[10,11,13],[12,13,15]]\n8\n
// @lcpr case=end

// @lcpr case=start
// [[-5]]\n1\n
// @lcpr case=end

 */
export { kthSmallest }
