/*
 * @lc app=leetcode.cn id=191 lang=typescript
 * @lcpr version=30204
 *
 * [191] 位1的个数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function hammingWeight(n: number): number {
  const binaryString = n.toString(2)
  let result = 0
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === '1')
      result += 1
  }

  return result
}
// @lc code=end

/*
// @lcpr case=start
// 11\n
// @lcpr case=end

// @lcpr case=start
// 128\n
// @lcpr case=end

// @lcpr case=start
// 2147483645\n
// @lcpr case=end

 */
export { hammingWeight }
