/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  const result = [-1, -1]
  _searchStart(nums, 0, nums.length - 1, target, result)
  _searchEnd(nums, 0, nums.length - 1, target, result)

  return result
}

function _searchStart(nums: number[], left: number, right: number, target: number, result: number[]): number {
  if (left > right) return result[0]

  const mid = left + Math.floor((right - left) >> 1)

  if (nums[mid] == target) {
    result[0] = mid
  }

  if (nums[mid] >= target) {
    //  通过nums[mid] >= target 使得能够在找到nums[mid] = target后，继续能够向左找
    result[0] = _searchStart(nums, left, mid - 1, target, result)
  } else {
    result[0] = _searchStart(nums, mid + 1, right, target, result)
  }

  return result[0]
}

function _searchEnd(nums: number[], left: number, right: number, target: number, result: number[]): number {
  if (left > right) return result[1]

  const mid = left + Math.floor((right - left) >> 1)

  if (nums[mid] == target) {
    result[1] = mid
  }

  if (nums[mid] <= target) {
    //  通过nums[mid] <= target 使得能够在找到nums[mid] = target后，继续能够向右找
    result[1] = _searchEnd(nums, mid + 1, right, target, result)
  } else {
    result[1] = _searchEnd(nums, left, mid - 1, target, result)
  }

  return result[1]
}
// @lc code=end

export { searchRange }
