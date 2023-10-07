/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */

// @lc code=start
function hammingWeight(n: number): number {
  const binaryString = n.toString(2)
  let result = 0
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] == '1') result += 1
  }

  return result
}
// @lc code=end

export default hammingWeight
