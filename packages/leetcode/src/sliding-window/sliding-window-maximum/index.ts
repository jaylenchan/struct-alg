/*
 * @lc app=leetcode.cn id=239 lang=typescript
 * @lcpr version=30204
 *
 * [239] 滑动窗口最大值
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
class SlidingWindow {
  private _array: number[]
  private _left: number
  private _right: number
  // 存储array当中可能当最大值的元素的索引
  private _maxQueue: number[]
  private _window: number[]

  constructor(_array: number[]) {
    this._array = _array
    this._left = 0
    this._right = -1
    this._maxQueue = []
    this._window = []
  }

  /** 获取滑动窗口当前最大值 */
  public getCurMaximum(): number {
    if (this._maxQueue.length === 0) {
      throw new Error('can not found current maximum in sliding _window.')
    }

    return this._array[this._maxQueue[0]]
  }

  /** 移动滑动窗口右边界 */
  public moveRightPtr(): void {
    if (this._right < this._array.length) {
      this._right++
      this._updateMaxDeque(this._right, true)
      // this._updateWindow()
    }
  }

  /** 移动滑动窗口左边界 */
  public moveLeftPtr(): void {
    if (this._left < this._right) {
      this._updateMaxDeque(this._left, false)
      this._left++
      // this._updateWindow()
    }
  }

  /** 获取当前窗口大小 */
  public getCurWindowSize(): number {
    if (this._left > this._right)
      return 0

    return this._right - this._left + 1
  }

  /** 获取当前窗口 */
  public getWindow(): number[] {
    return this._window
  }

  /** 是否应该滑动窗口 */
  public stopSliding(): boolean {
    return this._right === this._array.length
  }

  /** 更新当前窗口 */
  private _updateWindow(): void {
    this._window = []

    for (let i = this._left; i <= this._right; i++) {
      this._window.push(this._array[i])
    }
  }

  /** 更新双端队列 */
  private _updateMaxDeque(index: number, isRightPtrMove: boolean): void {
    const _maxQueue = this._maxQueue

    if (isRightPtrMove) {
      if (_maxQueue.length === 0) {
        _maxQueue.push(index)
        return
      }

      while (_maxQueue.length > 0 && this._array[_maxQueue[_maxQueue.length - 1]] < this._array[index]) {
        _maxQueue.pop()
      }

      _maxQueue.push(index)
    }
    else {
      // 查看当前移动前的left是否是双端队列的头部元素，不是的话，直接跳过不操作双端队列
      if (index === this._maxQueue[0]) {
        this._maxQueue.shift()
      }
    }
  }
}

function maxSlidingWindow(nums: number[], k: number): number[] {
  if (nums.length === 0)
    return []

  const _window = new SlidingWindow(nums)

  let _left = 0
  const _right = _left + k - 1

  while (_left <= _right) {
    _window.moveRightPtr()
    _left++
  }

  const ans: number[] = []

  while (true) {
    if (_window.stopSliding())
      break
    ans.push(_window.getCurMaximum())
    _window.moveRightPtr()
    _window.moveLeftPtr()
  }

  return ans
}
// @lc code=end

/*
// @lcpr case=start
// [1,3,-1,-3,5,3,6,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

 */
export { maxSlidingWindow }
