/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
  // dp[i] 表示长度为i的子串（或者说前i个字母组成的子串s[0,i-1]）是否能被拆分成给定字典里头的单词
  const wordSet = new Set<string>(wordDict)
  const size = s.length

  const dp = []
  dp[0] = true

  // 枚举长度为从1到size的所有长度的字符串情况 （注：i这里代表长度，j代表的是位置和长度）
  for (let i = 1; i <= size; i++) {
    dp[i] = false
    for (let j = 0; j < i; j++) {
      // 不断枚举切割点j（位置），查看dp[j]以及s[j,i)是否合法
      const suffix = s.substring(j, i)
      // dp[j] -> 代表s[0,j-1]
      // 剩下suffix就是s[j, i-1]
      // 以上两个子串加起来就是s[0, i-1]，也即是代表dp[i]
      if (wordSet.has(suffix) && dp[j]) {
        dp[i] = true
        break
      }
    }
  }

  return dp[size]
}

// @lc code=end

export default wordBreak
