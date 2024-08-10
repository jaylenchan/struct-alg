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
