/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length < 2) return strs[0]

  let result = strs[0]

  for (let i = 1; i < strs.length; i++) {
    let j = 0
    while (j < Math.min(result.length, strs[i].length)) {
      if (result[j] != strs[i][j]) break
      j += 1
    }

    result = result.slice(0, j)
  }

  return result
}
// @lc code=end

export { longestCommonPrefix }
