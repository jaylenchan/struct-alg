/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let maxLen = 0
  let left = 0
  let right = 0

  const dp = Array.from({ length: s.length }).fill(0).map(() => Array.from({ length: s.length }).fill(false))

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[j] === s[i]) {
        if (j - i <= 1) {
          // 情况1 只有1个字母 j - i = 0 s[j] === s[j]
          // 情况2 只有2个字母 j - i = 1 且 s[j] === s[i]
          dp[i][j] = true
        }
        else if (dp[i + 1][j - 1]) {
          dp[i][j] = true
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        left = i
        right = j
      }
    }
  }

  return s.slice(left, left + maxLen)
}
// @lc code=end

export { longestPalindrome }
