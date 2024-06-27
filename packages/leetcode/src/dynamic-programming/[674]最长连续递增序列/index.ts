/*
 * @lc app=leetcode.cn id=674 lang=typescript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
function findLengthOfLCIS(nums: number[]): number {
  // dp[i]表示以nums[i]为结尾的最长连续递增序列
  // dp[i] = nums[i] > nums[i-1] and dp[i-1] + 1 或者 1

  const dp: number[] = []

  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1
    }
  }

  let res = dp[0]
  for (let i = 1; i < dp.length; i++) {
    res = Math.max(res, dp[i])
  }

  return res
}
// @lc code=end

export { findLengthOfLCIS }
