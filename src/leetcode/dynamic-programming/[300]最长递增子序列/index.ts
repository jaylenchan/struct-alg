/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
  // dp[i] 表示以nums[i]为结尾的最长上升子序列的长度
  if (nums.length < 2) return nums.length
  const dp = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
  }

  let res = 1

  for (let i = 0; i < dp.length; i++) {
    res = Math.max(dp[i], res)
  }

  return res
}
// @lc code=end

export { lengthOfLIS }
