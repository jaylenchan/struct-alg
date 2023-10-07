/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */
export { permuteUnique }
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

/**
 * #思路#
 * 1. 依照题目要求，排列不能重复。我们可以先将数组进行排序，然后再进行排列生成
 * 2. 由于数组是按升序序列展示的此时，我们在做决策的时候，可以在每一轮选定一个数的所有排列结束之后，都查看一下下一个数是否跟当前数相同，如果相同，则跳过选定下个数
 * 3. 在选定数的时候，由于有了重复数，我们没法通过直接看数组中是否存在这个数去判断这个数是否需要选取，这个时候，我们可以加入一个set，用来筛选选中过的索引i。
 *    如果说i选过了，那么set中会有相关记录，直接continue跳过（不跳过，会重复选择索引i的数了）
 * 4. 在选定每个数的时候，我们将其加入path，同时将其索引i加入set，进行下一位之后的排列数的选定（递归generatePermutaion）
 * 5. 当进行完成当前轮的排列选定后，我们还需要恢复现场，将path当前选的值弹出，set中清除它的索引（看最外层循环：path不弹出当前选中值，for的下一个选定数就没法当第一个了）
 * 6. 完成所有全排列，返回结果result
 */
