/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let left = -1
  let right = nums.length
  let i = 0

  while (i < right) {
    // 循环终止条件是i碰到right了
    if (nums[i] == 0) {
      // 小数区域交换后，可以直接移动i
      swap(nums, i++, ++left)
    } else if (nums[i] == 2) {
      // 大数区域交换后，i不要动，因为还要再次确定目前i位置新数的大小
      swap(nums, i, --right)
    } else {
      // 等于1的区域直接跳i
      i++
    }
  }
}

function swap(nums: number[], i: number, j: number): void {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
// @lc code=end

export default sortColors
