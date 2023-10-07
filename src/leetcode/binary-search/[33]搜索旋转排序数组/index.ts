/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
  return _search(nums, 0, nums.length - 1, target)
}

function _search(
  nums: number[],
  left: number,
  right: number,
  target: number
): number {
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

/**
 * 思路：
 * 1. 判断分割的两部分哪边是有序的（办法：判断各部分的左端点和右端点，因为是升序的，所以查看左端点是否比右端点小）
 * 2. 有序区间判断目标是否落在区间内 （办法： 判断目标target和区间两个端点的关系，arr[l] < target < arr[r]是否成立）
 * 3. 查找target（办法：确认目标落在上面步骤判断的有序区间后，范围缩小继续二分搜索有序半边，如果不在有序区间，就搜索无序区间）
 */
// @lc code=end

export default search
