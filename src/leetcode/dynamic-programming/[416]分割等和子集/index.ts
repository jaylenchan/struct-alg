/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
  const numSize = nums.length
  if (numSize < 2) return false

  const target = nums.reduce((acc, cur) => acc + cur, 0) / 2
  if (target != parseInt(String(target))) return false

  const dp: boolean[][] = new Array(numSize)
    .fill(0)
    .map(() => new Array(target + 1).fill(false))

  for (let i = 0; i <= target; i++) {
    dp[0][i] = nums[0] == i
  }

  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = nums[i] == 0
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j <= target; j++) {
      dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]] || false
    }
  }

  return dp[numSize - 1][target]
}

/**
 * 思路：
  `[1,5,11,5]` 分割成`[1,5,1] 和 [11]`

  题目其实要求从数组`[1,5,11,5]`选取某些数，看是否拥有某些数使得他们的和等于数组总和的一半，也即是`22/2=11`。因为一次选取一个数，选一个少一个数，多次选取如果能够使得总和是11，那么数组剩下的另一半的和一定也是11。所以我们只需将问题转化成求`[1,5,11,5]`中找到一些数，使得总和等于11就OK了。这样子问题就转化成了0-1背包问题。

抽象：

`dp[i][j]`表示多次从数组 `[1,5,11,5]`中选取`[0,i]`号物品是否能够刚好放入容量为j的背包中。

递推公式：`dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i]]`
 */
// @lc code=end

export default canPartition
