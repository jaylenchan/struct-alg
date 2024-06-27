/*
 * @lc app=leetcode.cn id=643 lang=typescript
 * @lcpr version=30204
 *
 * [643] 子数组最大平均数 I
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findMaxAverage(nums: number[], k: number): number {
  if (nums.length < k)
    return 0

  let left = 0
  let right = k - 1
  let maxAverage = -(10 ** 5)

  while (right < nums.length) {
    maxAverage = Math.max(avg(nums, left, right, k), maxAverage)
    left += 1
    right += 1
  }

  return maxAverage
}

function avg(nums: number[], l: number, r: number, k: number): number {
  let sum = 0
  for (let i = l; i < r + 1; i++) {
    sum += nums[i]
  }

  return sum / k
}
// @lc code=end

/*
// @lcpr case=start
// [1,12,-5,-6,50,3]\n4\n
// @lcpr case=end

// @lcpr case=start
// [5]\n1\n
// @lcpr case=end

 */
export { findMaxAverage }
