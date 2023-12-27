/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  if (grid.length == 0) return 0

  const row = grid.length
  const col = grid[0].length
  const dp: number[][] = new Array(row).fill(0).map(() => new Array(col).fill(0))

  dp[0][0] = grid[0][0]

  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }

  for (let j = 1; j < col; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j]
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }

  return dp[row - 1][col - 1]
}
// @lc code=end

export { minPathSum }
