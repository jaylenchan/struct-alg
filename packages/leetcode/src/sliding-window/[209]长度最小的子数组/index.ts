/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0
  let min = Infinity

  let L = 0
  let R = 0

  while (R !== nums.length) {
    sum += nums[R]

    R++
    while (sum >= target) {
      min = Math.min(min, R - L)
      sum -= nums[L++]
    }
  }

  return min === Infinity ? 0 : min
}
// @lc code=end

export { minSubArrayLen }
