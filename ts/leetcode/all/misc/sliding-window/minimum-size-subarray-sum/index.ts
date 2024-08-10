/*
 * @lc app=leetcode.cn id=209 lang=typescript
 * @lcpr version=30204
 *
 * [209] 长度最小的子数组
 */

// @lcpr-template-start

// @lcpr-template-end
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

/*
// @lcpr case=start
// 7\n[2,3,1,2,4,3]\n
// @lcpr case=end

// @lcpr case=start
// 4\n[1,4,4]\n
// @lcpr case=end

// @lcpr case=start
// 11\n[1,1,1,1,1,1,1,1]\n
// @lcpr case=end

 */
export { minSubArrayLen }
