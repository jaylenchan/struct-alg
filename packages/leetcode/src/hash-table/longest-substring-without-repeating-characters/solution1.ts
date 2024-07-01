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
  if (s.length < 2)
    return s.length

  // 用一个map记录符合条件的子串和其长度
  // 从第一个字符开始，不断往后遍历
  const resMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const start = i

    for (let j = i + 1; j < s.length; j++) {
      const now = s.slice(start, j)
      // 如果now包括了s[j]，收集子串及其长度，提前结束子串遍历
      if (now.includes(s[j])) {
        resMap.set(now, now.length)
        break;
      }

      // 如果一直没被break，说明正常结束子串遍历
      if (j + 1 === s.length) {
        const now = s.slice(start, j + 1)
        resMap.set(now, now.length)
      }
    }
  }

  const lens = Array.from(resMap.values())
  lens.sort((a, b) => b - a)

  return lens[0]
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
