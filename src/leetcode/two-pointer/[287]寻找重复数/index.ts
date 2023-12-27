/*
 * @lc app=leetcode.cn id=287 lang=typescript
 *
 * [287] 寻找重复数
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  let duplicate = -1

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        duplicate = nums[j]
        return duplicate
      }
    }
  }

  return duplicate
}
// @lc code=end

export { findDuplicate }
