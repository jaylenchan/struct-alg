/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 * @lcpr version=30204
 *
 * [1143] 最长公共子序列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  const t1len = text1.length
  const t2len = text2.length

  const dp = new Array(t1len + 1).fill(0).map(() => new Array(t2len + 1).fill(0))

  for (let i = 1; i <= t1len; i++) {
    for (let j = 1; j <= t2len; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      }
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[t1len][t2len]
}
// @lc code=end

/*
// @lcpr case=start
// "abcde"\n"ace"\n
// @lcpr case=end

// @lcpr case=start
// "abc"\n"abc"\n
// @lcpr case=end

// @lcpr case=start
// "abc"\n"def"\n
// @lcpr case=end

 */
export { longestCommonSubsequence }
