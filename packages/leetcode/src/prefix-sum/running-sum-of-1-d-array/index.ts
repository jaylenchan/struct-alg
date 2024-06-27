/*
 * @lc app=leetcode.cn id=1480 lang=typescript
 * @lcpr version=30204
 *
 * [1480] 一维数组的动态和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function runningSum(nums: number[]): number[] {
  const prefixSum: number[] = []

  for (let i = 0; i <= nums.length; i++) {
    if (i === 0) {
      prefixSum[i] = 0
    }
    else {
      prefixSum[i] = prefixSum[i - 1] + nums[i - 1]
    }
  }

  prefixSum.shift()

  return prefixSum
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [3,1,2,10,1]\n
// @lcpr case=end

 */
export { runningSum }
