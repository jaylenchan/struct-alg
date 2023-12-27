/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */
// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0

  let len = 1

  const set = new Set<string>()
  let L = 0
  let R = 0

  while (R != s.length) {
    const ch = s[R++]

    while (set.has(ch)) {
      set.delete(s[L++])
    }
    set.add(ch)

    len = Math.max(len, R - L)
  }

  return len
}
// @lc code=end

export { lengthOfLongestSubstring }
