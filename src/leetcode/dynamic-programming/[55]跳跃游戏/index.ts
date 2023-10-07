/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  if (nums == null || nums.length == 0) return false

  const numsLen = nums.length

  const dp = new Array(numsLen).fill(false)

  dp[0] = true

  for (let j = 1; j < numsLen; j++) {
    for (let i = 0; i < j; i++) {
      if (dp[i] && i + nums[i] >= j) {
        dp[j] = true
        break
      }
    }
  }

  return dp[numsLen - 1]
}
// @lc code=end

export default canJump
