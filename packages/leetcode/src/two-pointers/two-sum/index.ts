/*
 * @lc app=leetcode.cn id=1 lang=typescript
 * @lcpr version=30204
 *
 * [1] 两数之和
 */

// @lcpr-template-start

// @lcpr-template-end
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

/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */
export { twoSum }
