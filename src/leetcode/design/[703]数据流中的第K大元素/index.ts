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
    if (this._size != this._capacity) {
      while (this._size != this._capacity) {
        this._insert(val)
      }
    } else {
      if (val > this._peek()) {
        this._delMin()
        this._insert(val)
      }
    }
    return this._peek()
  }

  private _init(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
      if (this._size != this._capacity) {
        this._insert(nums[i])
      } else {
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
        min =
          this._data[min] < this._data[this._right(index)]
            ? min
            : this._right(index)
      }

      if (this._data[min] > this._data[index]) break

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

export default KthLargest

/**
 * #思路#
 * 题目要求实现求数据流中的第K大元素，首先我们进行模式分析，求topK相关的问题，我们立马想到了堆。由于本题要求的是第K大，
 * 所以可以立马想到小根堆的实现，最小的元素总是在堆顶的。我们就假设存放k个数，则堆顶就是当前第K大元素。
 * 1. 实现一个小根堆
 * 2. 根据题目要求实现add方法：add要求加入元素的同时，还需要返回加入后的第K大。我们可以想到，先实现堆的insert和delMin
 * 然后再组合起来实现add方法。在初始化的时候，题目给了nums数组，和k表示第K大。但是nums数组长度是有可能跟k不相等的，所以
 * 我们先在construtor初始化的时候，先对nums进行第一次堆元素加入初始化，规则如下：
 *   - 当堆的元素没达到k的时候，我们加入nums[i]
 *   - 当堆的元素达到k的时候，nums还有数没加入，我们判断nums[i] > 堆顶元素，我们删除堆顶元素，再加入nums[i]
 * 3. 经过以上我们初始化了堆，但是有一种情况就是，很可能一开始nums的元素个数就小于k，压根不够堆存放元素容量k。
 *    所以我们在进行add的时候，首先判断一下size 跟 capacity的关系，
 *    - 情况1：size < _capacity : 也就是说堆元素个数，没达到我们设置的容量k那么大，此时就没法进行k大比较。我们需要先加入元素，达到k那么多个元素时，才进行堆顶元素返回第k大元素。
 *    - 情况2：size == _capacity: 直接判断当前val是否比堆顶元素大，是的话删除堆顶，加入元素，然后返回新的堆顶元素
 *    - 无情况3： _size > capacity只在初始化一次性给到nums多个元素才有可能，我们已经在初始化处理这种情况了！
 */
