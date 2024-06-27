/* eslint-disable no-irregular-whitespace */
/*
 * @lc app=leetcode.cn id=151 lang=typescript
 * @lcpr version=30204
 *
 * [151] 反转字符串中的单词
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function reverseWords(s: string): string {
  const strs = s.split(' ')

  return strs
    .reduceRight((acc, cur) => `${acc} ${cur}`)
    .trim()
    .replace(/\s+/g, ' ')
}
// @lc code=end

/*
// @lcpr case=start
// "the sky is blue"\n
// @lcpr case=end

// @lcpr case=start
// "  hello world  "\n
// @lcpr case=end

// @lcpr case=start
// "a good   example"\n
// @lcpr case=end

 */
export { reverseWords }
