/*
 * @lc app=leetcode.cn id=268 lang=typescript
 *
 * [268] 丢失的数字
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  const set = new Set<number>(nums)
  let num = -1

  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) {
      num = i
      break
    }
  }

  return num
}
// @lc code=end

export default missingNumber
