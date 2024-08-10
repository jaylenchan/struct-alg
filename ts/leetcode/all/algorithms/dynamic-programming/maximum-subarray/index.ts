/*
 * @lc app=leetcode.cn id=53 lang=typescript
 * @lcpr version=30204
 *
 * [53] 最大子数组和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxSubArray(nums: number[]): number {
  // dp[i] 表示以nums[i]为结尾的连续子数组的最大和

  const dp = []

  dp[0] = nums[0]

  let res = dp[0]

  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = dp[i - 1] + nums[i]
    }
    else {
      dp[i] = nums[i]
    }
  }

  for (let i = 0; i < dp.length; i++) {
    res = Math.max(res, dp[i])
  }

  return res
}
// @lc code=end

/*
// @lcpr case=start
// [-2,1,-3,4,-1,2,1,-5,4]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [5,4,-1,7,8]\n
// @lcpr case=end

 */
export { maxSubArray }
