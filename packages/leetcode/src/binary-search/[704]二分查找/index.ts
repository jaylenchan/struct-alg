/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  return _search(nums, 0, nums.length - 1, target)
}

function _search(nums: number[], l: number, r: number, target: number): number {
  if (l > r)
    return -1

  const mid = Math.floor(l + (r - l) / 2)
  if (nums[mid] === target) {
    return mid
  }
  else if (nums[mid] > target) {
    return _search(nums, l, mid - 1, target)
  }
  else {
    return _search(nums, mid + 1, r, target)
  }
}
// @lc code=end

export { search }
