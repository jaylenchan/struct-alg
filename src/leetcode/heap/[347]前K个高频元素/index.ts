/* eslint-disable @typescript-eslint/no-non-null-assertion */
/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
class KMinHeap {

  private _data: number[]
  private _size: number

  constructor(public map: Map<number, number>) {
    this._data = []
    this._size = 0
  }

  public isEmpty(): boolean {
    return this._size == 0
  }

  public peek(): number {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.map.get(this._data[0])!
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
    while (
      this.map.get(this._data[index])! <
      this.map.get(this._data[this._parent(index)])!
    ) {
      this._swap(index, this._parent(index))
      index = this._parent(index)
    }
  }

  private _sink(index: number): void {
    while (this._left(index) < this._size) {
      let minIndex = this._left(index)
      const _right = this._right(index)

      if (_right < this._size) {
        minIndex =
          this.map.get(this._data[minIndex])! <
          this.map.get(this._data[_right])!
            ? minIndex
            : _right
      }

      if (
        this.map.get(this._data[index])! < this.map.get(this._data[minIndex])!
      )
        break

      this._swap(index, minIndex)
      index = minIndex
    }
  }

  private _parent(index: number): number {
    if (index == 0) return 0

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

function topKFrequent(nums: number[], k: number): number[] {
  if (nums.length == 0) return []

  const numMap = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (!numMap.has(nums[i])) {
      numMap.set(nums[i], 1)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      numMap.set(nums[i], numMap.get(nums[i])! + 1)
    }
  }

  const heap = new KMinHeap(numMap)

  let n = 0
  for (const [num, count] of numMap) {
    if (n == k) {
      if (count > heap.peek()) {
        heap.delMin()
        heap.insert(num)
      }
    } else {
      heap.insert(num)
      n++
    }
  }

  const ans = []

  while (!heap.isEmpty()) {
    ans.push(heap.delMin())
  }

  return ans
}
// @lc code=end

export default topKFrequent

/**
 * 思路：
 * 1. 使用map建立数字跟次数之间映射
 * 2. 遍历map建立小根堆：
 *    - 当不够k个数时，我们往堆里插入节点（因为我们要找前k个最高频的数，我们就先放k个假装现在最高频的是这k个）
 *    - 当count次数比小根堆的根大的时候，删除小根堆的根，然后将新num插入堆
 * 3. 不断循环整个操作，直到map遍历完成，由于我们每次都会把最低频的数从小根堆去除，总共就map size个数，从头遍历一遍后，剩下的k个数就是次数最频繁的数
 * 4. 从小根堆中收集结果，返回结果
 */
