/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
function reverseWords(s: string): string {
  const strs = s.split(' ')

  return strs
    .reduceRight((acc, cur) => `${acc} ${cur}`)
    .trim()
    .replace(/\s+/g, ' ')
}
// @lc code=end

export default reverseWords

/**
 * #思路#
 * 分割字符串+右递归拼接字符串+去除前后空格+替换多个空格为1个空格
 */
