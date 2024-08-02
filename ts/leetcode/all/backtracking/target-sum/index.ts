/*
 * @lc app=leetcode.cn id=494 lang=typescript
 * @lcpr version=30204
 *
 * [494] 目标和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findTargetSumWays(nums: number[], target: number): number {
  const options = [-1, 1]
  let ans = 0
  function backtracking(nums: number[], target: number, start: number, temp: number): void {
    if (start === nums.length) {
      if (temp === target)
        ans++
      return
    }

    for (let i = 0; i < options.length; i++) {
      backtracking(nums, target, start + 1, options[i] * nums[start] + temp)
    }
  }
  backtracking(nums, target, 0, 0)

  return ans
}
// @lc code=end

/*
// @lcpr case=start
// [1,1,1,1,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

 */
export { findTargetSumWays }
