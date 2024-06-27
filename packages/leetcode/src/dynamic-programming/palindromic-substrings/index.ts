/*
 * @lc app=leetcode.cn id=647 lang=typescript
 * @lcpr version=30204
 *
 * [647] 回文子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function countSubstrings(s: string): number {
  // dp[i][j] 表示区间s[i][j]是否为回文串

  const size = s.length
  const dp: boolean[][] = new Array(size).fill(false).map(() => new Array(size).fill(false))
  let result = 0

  for (let i = size - 1; i >= 0; i--) {
    // 遍历字符串开始位置
    for (let j = i; j < size; j++) {
      // 遍历字符串结束位置（至少从i开始，因为j一定大于等于i才对）
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          dp[i][j] = true
        }
        else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }
      if (dp[i][j]) {
        result += 1
      }
    }
  }
  return result
}

// @lc code=end

/*
// @lcpr case=start
// "abc"\n
// @lcpr case=end

// @lcpr case=start
// "aaa"\n
// @lcpr case=end

 */
export { countSubstrings }
