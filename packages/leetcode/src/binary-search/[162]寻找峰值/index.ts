/*
 * @lc app=leetcode.cn id=162 lang=typescript
 *
 * [162] 寻找峰值
 */

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

export { findPeakElement }
