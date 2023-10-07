/*
 * @lc app=leetcode.cn id=384 lang=typescript
 *
 * [384] 打乱数组
 */

// @lc code=start
class Solution {

  private _nums: number[]
  constructor(_nums: number[]) {
    this._nums = _nums
  }

  public reset(): number[] {
    return this._nums
  }

  public shuffle(): number[] {
    const copyNums = []
    for (let i = 0; i != this._nums.length; i++) {
      copyNums[i] = this._nums[i]
    }
    for (let i = 0; i != copyNums.length; i++) {
      const size = copyNums.length
      const random = i + Math.floor(Math.random() * (size - i))
      ;[copyNums[i], copyNums[random]] = [copyNums[random], copyNums[i]]
    }
    return copyNums
  }

}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(_nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

export default Solution
/**
 * #思路#
 * 随机算法：遍历数组，来到i，则从i到size - 1 - i 这个区间随机抽一个数，跟i位置交换
 * i = 0 ， 从0 ~ size-1 - i取一个数，nums[0]交换nums[size-1]
 * i = 1 ， 从1 ~ size - 1 - i 取一个数，nums[1]交换nums[size -2]
 * 依次类推
 */
