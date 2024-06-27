/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
class Num {
  constructor(
    public index: number,
    public val: number,
  ) { }
}
function twoSum(sums: number[], target: number): number[] {
  if (sums.length <= 1)
    return []

  const ans: number[][] = []

  const nums = sums.map((num, index) => new Num(index, num))
  nums.sort((a, b) => a.val - b.val)

  let L = 0
  let R = sums.length - 1

  while (L < R) {
    const numL = nums[L].val
    const numR = nums[R].val
    if (numL + numR === target) {
      ans.push([nums[L].index, nums[R].index])
      L++
      R--
      while (nums[L] && nums[L].val === numL) {
        L++
      }
      while (nums[R] && nums[R].val === numR) {
        R--
      }
    }
    else if (numL + numR < target) {
      L++
    }
    else {
      R--
    }
  }

  return ans[0]
}
// @lc code=end

export { twoSum }
