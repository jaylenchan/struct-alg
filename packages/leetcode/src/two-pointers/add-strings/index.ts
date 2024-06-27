/*
 * @lc app=leetcode.cn id=415 lang=typescript
 * @lcpr version=30204
 *
 * [415] 字符串相加
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function addStrings(num1: string, num2: string): string {
  let i = num1.length - 1
  let j = num2.length - 1
  const result = []
  let carry = 0

  while (i >= 0 || j >= 0) {
    const sum = (i >= 0 ? Number(num1[i]) : 0) + (j >= 0 ? Number(num2[j]) : 0) + carry
    carry = Math.floor(sum / 10)
    const cur = sum % 10
    result.unshift(cur)
    i -= 1
    j -= 1
  }

  if (carry > 0) {
    result.unshift(1)
  }

  return result.join('')
}
// @lc code=end

/*
// @lcpr case=start
// "11"\n"123"\n
// @lcpr case=end

// @lcpr case=start
// "456"\n"77"\n
// @lcpr case=end

// @lcpr case=start
// "0"\n"0"\n
// @lcpr case=end

 */
export { addStrings }
