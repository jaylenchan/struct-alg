/*
 * @lc app=leetcode.cn id=1480 lang=typescript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
function runningSum(nums: number[]): number[] {
  const prefixSum: number[] = []

  for (let i = 0; i <= nums.length; i++) {
    if (i == 0) {
      prefixSum[i] = 0
    } else {
      prefixSum[i] = prefixSum[i - 1] + nums[i - 1]
    }
  }

  prefixSum.shift()

  return prefixSum
}
// @lc code=end

export { runningSum }
