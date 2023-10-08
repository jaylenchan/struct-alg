/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

export { rotate }

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    nums.unshift(nums.pop()!)
  }
}
// @lc code=end
