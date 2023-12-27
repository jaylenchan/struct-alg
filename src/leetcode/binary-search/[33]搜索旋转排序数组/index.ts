/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
  return _search(nums, 0, nums.length - 1, target)
}

function _search(nums: number[], left: number, right: number, target: number): number {
  if (left > right) return -1

  const mid = left + Math.floor((right - left) >> 1)

  if (nums[mid] == target) {
    return mid
  }

  if (nums[left] <= nums[mid]) {
    // 说明左半部分是有序的
    if (nums[left] <= target && target < nums[mid]) {
      return _search(nums, left, mid - 1, target)
    } else {
      return _search(nums, mid + 1, right, target)
    }
  } else {
    // 说明右边半部分是有序的
    if (nums[mid] < target && target <= nums[right]) {
      return _search(nums, mid + 1, right, target)
    } else {
      return _search(nums, left, mid - 1, target)
    }
  }
}
// @lc code=end

export { search }
