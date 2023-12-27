/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function twoSum(nums: number[], begin: number, target: number): number[][] {
  const ans: number[][] = []

  let L = begin
  let R = nums.length - 1

  while (L < R) {
    const numL = nums[L]
    const numR = nums[R]
    if (numL + numR == target) {
      ans.push([numL, numR])
      L++
      R--
      while (nums[L] == numL) {
        L++
      }

      while (nums[R] == numR) {
        R--
      }
    } else if (numL + numR < target) {
      L++
    } else {
      R--
    }
  }

  return ans
}

function getSum(nums: number[], begin: number, target: number, level: number): number[][] {
  if (level == 1) return twoSum(nums, begin, target)

  const ans: number[][] = []
  for (let i = begin; i < nums.length - level; ) {
    const curRes = getSum(nums, i + 1, target - nums[i], level - 1)

    for (let j = 0; j < curRes.length; j++) {
      ans.push([nums[i], ...curRes[j]])
    }

    i++
    while (nums[i] == nums[i - 1]) i++
  }

  return ans
}

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)

  return getSum(nums, 0, 0, 2)
}
// @lc code=end

export { threeSum }
