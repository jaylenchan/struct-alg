/*
 * @lc app=leetcode.cn id=16 lang=typescript
 * @lcpr version=30204
 *
 * [16] 最接近的三数之和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function twoSumCloset(nums: number[], begin: number, target: number): number {
  let L = begin
  let R = nums.length - 1

  let closest = -Infinity / 2

  while (L < R) {
    const numL = nums[L]
    const numR = nums[R]
    const sumLR = numL + numR

    closest = Math.abs(target - closest) - Math.abs(target - sumLR) > 0 ? sumLR : closest

    if (sumLR === target) {
      L++
      R--
    }
    else if (sumLR < target) {
      L++
    }
    else {
      R--
    }
  }

  return closest
}

function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b)

  let closest = -Infinity / 2
  for (let i = 0; i < nums.length; i++) {
    const aim = target - nums[i]
    const closestTwoSum = twoSumCloset(nums, i + 1, aim)

    closest
      = Math.abs(target - closest) - Math.abs(target - (nums[i] + closestTwoSum)) > 0 ? nums[i] + closestTwoSum : closest
  }

  return closest
}
// @lc code=end

/*
// @lcpr case=start
// [-1,2,1,-4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n1\n
// @lcpr case=end

 */
export { threeSumClosest }
