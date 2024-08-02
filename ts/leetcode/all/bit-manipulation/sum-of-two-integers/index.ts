/*
 * @lc app=leetcode.cn id=371 lang=typescript
 * @lcpr version=30204
 *
 * [371] 两整数之和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function getSum(a: number, b: number): number {
  if (b === 0)
    return a

  const sum = a ^ b
  const carry = (a & b) << 1

  return getSum(sum, carry)
}

// @lc code=end

/*
// @lcpr case=start
// 1\n2\n
// @lcpr case=end

// @lcpr case=start
// 2\n3\n
// @lcpr case=end

 */
export { getSum }
