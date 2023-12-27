/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */
// @lc code=start
function generatePermutaion(
  nums: number[],
  selectedNum: number,
  selectedSet: Set<number>,
  path: number[],
  result: number[][]
): void {
  if (selectedNum == nums.length) {
    result.push([...path])
    return
  }

  for (let i = 0; i < nums.length; i++) {
    if (selectedSet.has(i)) continue

    path.push(nums[i])
    selectedSet.add(i)

    generatePermutaion(nums, selectedNum + 1, selectedSet, path, result)

    path.pop()
    selectedSet.delete(i)

    while (nums[i + 1] == nums[i]) i++
  }
}

function permuteUnique(nums: number[]): number[][] {
  const path: number[] = []
  const result: number[][] = []
  const set = new Set<number>()

  nums.sort((a, b) => a - b)
  generatePermutaion(nums, 0, set, path, result)

  return result
}
// @lc code=end

export { permuteUnique }
