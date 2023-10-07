/*
 * @lc app=leetcode.cn id=647 lang=typescript
 *
 * [647] 回文子串
 */

// @lc code=start
function countSubstrings(s: string): number {
  //dp[i][j] 表示区间s[i][j]是否为回文串

  const size = s.length
  const dp: boolean[][] = new Array(size)
    .fill(false)
    .map(() => new Array(size).fill(false))
  let result = 0

  for (let i = size - 1; i >= 0; i--) {
    // 遍历字符串开始位置
    for (let j = i; j < size; j++) {
      // 遍历字符串结束位置（至少从i开始，因为j一定大于等于i才对）
      if (s[i] == s[j]) {
        if (j - i <= 1) {
          dp[i][j] = true
        } else {
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

/**
 * 思路：
 * dp[i][j] 表示区间s[i][j]是否为回文串
 * 如果s[i] == s[j]就说明前后端点字符相等，有可能是回文串
 *  - 如果i所在位置和j所在位置一样，说明一定是回文，因为只有1个字符
 *  - 如果i所在位置和j所在位置相差1，说明一定是回文，因为有2个字符
 *  - 如果i所在位置和j所在位置至少相差2，即大于1，那就得看dp[i-1][j-1]了
 *
 * 在dp[i][j] == true 的时候增加计数器
 */
// @lc code=end

export default countSubstrings
