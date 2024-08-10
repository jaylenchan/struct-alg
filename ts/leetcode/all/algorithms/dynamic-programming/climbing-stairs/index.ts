/*
 * @lc app=leetcode.cn id=70 lang=typescript
 * @lcpr version=30204
 *
 * [70] 爬楼梯
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function climbStairs(n: number): number {
  // dp[i] 表示走到第i层台阶所有的方法数
  const dp = []
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}
// @lc code=end

/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

 */
export { climbStairs }
