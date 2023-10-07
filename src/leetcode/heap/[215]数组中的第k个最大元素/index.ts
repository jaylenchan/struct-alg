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

export default findKthLargest

/**
 * 思路：题目要求数组中第K个最大元素，那么我们可以建立一个小根堆。然后利用这个小根堆，先存k个数
 * 我们发现，拥有k个节点的小根堆的根一定是这k个数中最小的，于是我们遍历数组剩下的数，然后发现如
 * 果说当前被遍历到的数比根大，说明根不再参与k个大元素的比拼，从堆里删除，我们将新的数字加入堆，
 * 继续进行新的K大比较，最后我们遍历完成数组之后，直接返回小根堆的堆顶就是题目要的第k个最大元素
 */
