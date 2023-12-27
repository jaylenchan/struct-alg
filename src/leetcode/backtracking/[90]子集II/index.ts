/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function getSubset(nums: number[], start: number, path: number[], result: number[][]): void {
  if (path.length == nums.length) return

  for (let i = start; i < nums.length; i++) {
    path.push(nums[i])
    result.push([...path])

    getSubset(nums, i + 1, path, result)

    path.pop()

    while (nums[i + 1] == nums[i]) i++
  }
}

function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = [[]]
  const path: number[] = []

  nums.sort((a, b) => a - b)
  getSubset(nums, 0, path, result)

  return result
}
// @lc code=end

export { subsetsWithDup }
