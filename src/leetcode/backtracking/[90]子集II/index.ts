/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function getSubset(
  nums: number[],
  start: number,
  path: number[],
  result: number[][]
): void {
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

/**
 * #思路#
 * 1. 子集的思路是，上来for循环就直接加入path，然后进行递归获取要加入path的下一个数
 * 2. 同样的去重步骤也是每轮选取完成之后，都判断i+1位置的数和i位置的数是否相等，相等就i++去重
 * 3. 为了配合去重，数组也要进行先排序，让顺序能够有序，去重才能判断i+1和i
 */

export default subsetsWithDup
