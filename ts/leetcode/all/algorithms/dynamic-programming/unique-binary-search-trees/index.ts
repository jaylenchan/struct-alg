/*
 * @lc app=leetcode.cn id=96 lang=typescript
 * @lcpr version=30204
 *
 * [96] 不同的二叉搜索树
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function numTrees(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0)

  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i + 1; j++) {
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }

  return dp[n]
}

// @lc code=end

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
export { numTrees }
