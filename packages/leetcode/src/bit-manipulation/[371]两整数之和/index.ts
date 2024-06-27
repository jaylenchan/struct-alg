/*
 * @lc app=leetcode.cn id=371 lang=typescript
 *
 * [371] 两整数之和
 */

// @lc code=start
function getSum(a: number, b: number): number {
  if (b === 0)
    return a

  const sum = a ^ b
  const carry = (a & b) << 1

  return getSum(sum, carry)
}

// @lc code=end

export { getSum }
