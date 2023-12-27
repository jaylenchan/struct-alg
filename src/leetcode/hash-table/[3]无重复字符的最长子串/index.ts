/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */
// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0

  let len = 1

  const lastMap: number[] = new Array(256).fill(-1)
  let prev = -1

  for (let i = 0; i < s.length; i++) {
    prev = Math.max(prev, lastMap[s[i].charCodeAt(0)])
    len = Math.max(len, i - prev)
    lastMap[s[i].charCodeAt(0)] = i
  }

  return len
}
// @lc code=end

export { lengthOfLongestSubstring }
