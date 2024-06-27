/*
 * @lc app=leetcode.cn id=384 lang=typescript
 * @lcpr version=30204
 *
 * [384] 打乱数组
 */

// @lcpr-template-start

// @lcpr-template-end
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
    for (let i = 0; i !== this._nums.length; i++) {
      copyNums[i] = this._nums[i]
    }
    for (let i = 0; i !== copyNums.length; i++) {
      const size = copyNums.length
      const random = i + Math.floor(Math.random() * (size - i))
        ;[copyNums[i], copyNums[random]] = [copyNums[random], copyNums[i]]
    }
    return copyNums
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end
export { Solution }
