/*
 * @lc app=leetcode.cn id=338 lang=typescript
 * @lcpr version=30204
 *
 * [338] 比特位计数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function countBits(n: number): number[] {
  // i % 2 === 1  dp[i] = dp[i-1] + 1
  // i % 2 === 0 dp[i] = dp[Math.floor(i/2)]

  const dp: number[] = []

  dp[0] = 0

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      dp[i] = dp[i - 1] + 1
    }
    else {
      dp[i] = dp[Math.floor(i / 2)]
    }
  }

  return dp
}
// @lc code=end

/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 5\n
// @lcpr case=end

 */
export { countBits }
