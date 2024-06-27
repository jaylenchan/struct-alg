/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
function sortArray(nums: number[]): number[] {
  sort(nums, 0, nums.length - 1)

  return nums
}

function sort(nums: number[], left: number, right: number): void {
  if (left > right)
    return

  const [el, er] = partition(nums, left, right)
  sort(nums, left, el - 1)
  sort(nums, er + 1, right)
}

function partition(nums: number[], left: number, right: number): [number, number] {
  if (left > right)
    return [-1, -1]
  if (left === right)
    return [left, right]

  const random = left + Math.floor(Math.random() * (right - left + 1))
  swap(nums, random, right)

  let less = left - 1
  let more = right

  const pivot = nums[right]
  let cur = left

  while (cur < more) {
    if (nums[cur] < pivot) {
      swap(nums, cur++, ++less)
    }
    else if (nums[cur] > pivot) {
      swap(nums, cur, --more)
    }
    else {
      cur++
    }
  }

  swap(nums, more, right)

  return [less + 1, more]
}

function swap(nums: number[], i: number, j: number): void {
  ;[nums[i], nums[j]] = [nums[j], nums[i]]
}

// @lc code=end

export { sortArray }
