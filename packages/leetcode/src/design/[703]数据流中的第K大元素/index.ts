/*
 * @lc app=leetcode.cn id=703 lang=typescript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
class KthLargest {
  private _data: number[]
  private _size: number
  private _capacity: number

  constructor(k: number, nums: number[]) {
    this._data = []
    this._size = 0
    this._capacity = k

    this._init(nums)
  }

  public add(val: number): number {
    if (this._size !== this._capacity) {
      while (this._size !== this._capacity) {
        this._insert(val)
      }
    }
    else {
      if (val > this._peek()) {
        this._delMin()
        this._insert(val)
      }
    }
    return this._peek()
  }

  private _init(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
      if (this._size !== this._capacity) {
        this._insert(nums[i])
      }
      else {
        if (nums[i] > this._peek()) {
          this._delMin()
          this._insert(nums[i])
        }
      }
    }
  }

  private _peek(): number {
    return this._data[0]
  }

  private _insert(val: number): void {
    this._data[this._size++] = val
    this._swim(this._size - 1)
  }

  private _delMin(): number {
    const min = this._data[0]

    this._swap(0, this._size - 1)
    this._size--
    this._sink(0)

    return min
  }

  private _sink(index: number): void {
    while (this._left(index) < this._size) {
      let min = this._left(index)
      if (this._right(index) < this._size) {
        min = this._data[min] < this._data[this._right(index)] ? min : this._right(index)
      }

      if (this._data[min] > this._data[index])
        break

      this._swap(min, index)

      index = min
    }
  }

  private _swim(index: number): void {
    while (this._data[index] < this._data[this._parent(index)]) {
      this._swap(index, this._parent(index))
      index = this._parent(index)
    }
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

  private _swap(i: number, j: number): void {
    ;[this._data[i], this._data[j]] = [this._data[j], this._data[i]]
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

export { KthLargest }
