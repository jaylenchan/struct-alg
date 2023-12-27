/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
class AMinHeap {
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

  public delMin(): number {
    const max = this._data[0]

    this._swap(0, this._size - 1)
    this._data.pop()
    this._size--
    this._sink(0)

    return max
  }

  private _swim(index: number): void {
    while (this._data[this._parent(index)] > this._data[index]) {
      this._swap(index, this._parent(index))
      index = this._parent(index)
    }
  }

  private _sink(index: number): void {
    while (this._left(index) < this._size) {
      let minIndex = this._left(index)
      const _right = this._right(index)

      if (_right < this._size) {
        minIndex = this._data[minIndex] < this._data[_right] ? minIndex : _right
      }

      if (this._data[minIndex] > this._data[index]) break

      this._swap(minIndex, index)

      index = minIndex
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

function findKthLargest(nums: number[], k: number): number {
  if (nums.length == 0) return -1

  const heap = new AMinHeap()
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (count == k) {
      if (heap.peek() < nums[i]) {
        heap.delMin()
        heap.insert(nums[i])
      }
    } else {
      heap.insert(nums[i])
      count++
    }
  }

  return heap.delMin()
}

// @lc code=end

export { findKthLargest }
