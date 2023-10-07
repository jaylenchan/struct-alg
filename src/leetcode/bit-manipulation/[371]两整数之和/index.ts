/*
 * @lc app=leetcode.cn id=371 lang=typescript
 *
 * [371] 两整数之和
 */

// @lc code=start
function getSum(a: number, b: number): number {
  if (b == 0) return a

  const sum = a ^ b
  const carry = (a & b) << 1

  return getSum(sum, carry)
}

/**
 * 思路：
 * 1. 将a+b拆分为: a和b无进位的结果 和 a和b进位的结果
 * 2. 使用异或运算计算无进位的结果
 * 3. 使用与运算+移位运算计算进位的结果
 * 4. 循环这个过程，直到进位是0
 */
// @lc code=end

export default getSum
