/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  if (obstacleGrid == null || obstacleGrid.length == 0) {
    return 0
  }

  const m = obstacleGrid.length,
    n = obstacleGrid[0].length

  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m && obstacleGrid[i][0] == 0; i++) {
    dp[i][0] = 1
  }
  for (let j = 0; j < n && obstacleGrid[0][j] == 0; j++) {
    dp[0][j] = 1
  }

  // 根据状态转移方程 dp[i][j] = dp[i - 1][j] + dp[i][j - 1] 进行递推。
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] == 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[m - 1][n - 1]
}
// @lc code=end

export { uniquePathsWithObstacles }
