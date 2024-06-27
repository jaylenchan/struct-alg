/*
 * @lc app=leetcode.cn id=18 lang=typescript
 * @lcpr version=30204
 *
 * [18] 四数之和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function twoSum(nums: number[], begin: number, target: number): number[][] {
  const ans2: number[][] = []

  let L = begin
  let R = nums.length - 1

  while (L < R) {
    const numL = nums[L]
    const numR = nums[R]
    const sumLR = numL + numR

    if (sumLR === target) {
      L++
      R--

      ans2.push([numL, numR])

      while (nums[L] === numL) {
        L++
      }

      while (nums[R] === numR) {
        R--
      }
    }
    else if (sumLR < target) {
      L++
      while (nums[L] === nums[L - 1]) L++
    }
    else {
      R--
      while (nums[R] === nums[R + 1]) R--
    }
  }

  return ans2
}

function getSum(nums: number[], begin: number, target: number, level: number): number[][] {
  if (level === 1)
    return twoSum(nums, begin, target)

  const ans: number[][] = []
  for (let i = begin; i < nums.length - level;) {
    const curRes = getSum(nums, i + 1, target - nums[i], level - 1)

    for (let j = 0; j < curRes.length; j++) {
      ans.push([nums[i], ...curRes[j]])
    }

    i++
    while (nums[i] === nums[i - 1]) i++
  }

  return ans
}

function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b)

  return getSum(nums, 0, target, 3)
}
// @lc code=end

/*
// @lcpr case=start
// [1,0,-1,0,-2,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [2,2,2,2,2]\n8\n
// @lcpr case=end

 */
export { fourSum }
