/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
  const numSize = nums.length
  if (numSize < 2) return false

  const target = nums.reduce((acc, cur) => acc + cur, 0) / 2
  if (target != parseInt(String(target))) return false

  const dp: boolean[][] = new Array(numSize).fill(0).map(() => new Array(target + 1).fill(false))

  for (let i = 0; i <= target; i++) {
    dp[0][i] = nums[0] == i
  }

  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = nums[i] == 0
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j <= target; j++) {
      dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]] || false
    }
  }

  return dp[numSize - 1][target]
}
// @lc code=end

export default canPartition
