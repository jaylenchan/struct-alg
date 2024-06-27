/*
 * @lc app=leetcode.cn id=300 lang=typescript
 * @lcpr version=30204
 *
 * [300] 最长递增子序列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function lengthOfLIS(nums: number[]): number {
  // dp[i] 表示以nums[i]为结尾的最长上升子序列的长度
  if (nums.length < 2)
    return nums.length
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

/*
// @lcpr case=start
// [10,9,2,5,3,7,101,18]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,0,3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [7,7,7,7,7,7,7]\n
// @lcpr case=end

 */
export { lengthOfLIS }
