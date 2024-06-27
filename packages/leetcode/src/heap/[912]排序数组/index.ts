/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
class MinHeap {
  public size: number
  private _data: number[]

  constructor() {
    this._data = []
    this.size = 0
  }

  public add(num: number): void {
    this._data[this.size++] = num
    this._swim(this.size - 1)
  }

  public delMin(): number {
    const min = this._data[0]

    this._swap(0, this.size - 1)
    this._data.pop()
    this.size--
    this._sink(0)

    return min
  }

  private _parent(index: number): number {
    if (index === 0)
      return 0

    return Math.floor((index - 1) / 2)
  }

  private _left(index: number): number {
    return 2 * index + 1
  }

  private _right(index: number): number {
    return 2 * index + 2
  }

  private _swim(index: number): void {
    while (this._data[index] < this._data[this._parent(index)]) {
      this._swap(index, this._parent(index))

      index = this._parent(index)
    }
  }

  private _sink(index: number): void {
    while (this._left(index) < this.size) {
      let min = this._left(index)

      if (this._right(index) < this.size) {
        min = this._data[min] > this._data[this._right(index)] ? this._right(index) : min
      }

      if (this._data[min] > this._data[index])
        break

      this._swap(min, index)
      index = min
    }
  }

  private _swap(i: number, j: number): void {
    ;[this._data[i], this._data[j]] = [this._data[j], this._data[i]]
  }
}

function sortArray(nums: number[]): number[] {
  const heap = new MinHeap()

  for (let i = 0; i < nums.length; i++) {
    heap.add(nums[i])
  }

  let j = 0
  const size = heap.size
  while (j < size) {
    nums[j++] = heap.delMin()
  }

  return nums
}
// @lc code=end

export { sortArray }
