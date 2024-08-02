/*
 * @lc app=leetcode.cn id=162 lang=typescript
 * @lcpr version=30204
 *
 * [162] 寻找峰值
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findPeakElement(nums: number[]): number {
  return searchPeak(nums, 0, nums.length - 1)
}

function searchPeak(nums: number[], left: number, right: number): number {
  if (left >= right)
    return right

  const mid = left + Math.floor((right - left) >> 1)
  const target = nums[mid]
  const rightEl = nums[mid + 1]

  if (target < rightEl) {
    return searchPeak(nums, mid + 1, right)
  }
  else {
    return searchPeak(nums, left, mid)
  }
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,1,3,5,6,4]\n
// @lcpr case=end

 */
export { findPeakElement }
