/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */
export { lengthOfLongestSubstring }
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

/**
 * #思路#
 * 滑动窗口
 * 1. 定义左右指针L和R，让R从左往右遍历整个字符串
 * 2. 每次遍历取出当前字符ch，然后查看set是否有这个ch：
 *    - 没有：直接跳过判断while，set加入ch，然后更新len
 *    - 有：进入while判断循环，不断从set中删除s[L]，直到set不再有ch。然后set加入ch，更新len
 * 3. 重复直到R==s.length，返回结果
 */
