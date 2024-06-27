/*
 * @lc app=leetcode.cn id=3 lang=typescript
 * @lcpr version=30204
 *
 * [3] 无重复字符的最长子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (!s)
    return 0

  let len = 1

  const set = new Set<string>()
  let L = 0
  let R = 0

  while (R !== s.length) {
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

/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */
export { lengthOfLongestSubstring }
