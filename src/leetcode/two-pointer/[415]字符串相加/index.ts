/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let i = num1.length - 1
  let j = num2.length - 1
  const result = []
  let carry = 0

  while (i >= 0 || j >= 0) {
    const sum =
      (i >= 0 ? Number(num1[i]) : 0) + (j >= 0 ? Number(num2[j]) : 0) + carry
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

export default addStrings
