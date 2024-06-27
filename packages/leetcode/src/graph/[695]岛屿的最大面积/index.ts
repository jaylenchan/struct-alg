/*
 * @lc app=leetcode.cn id=695 lang=typescript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
function maxAreaOfIsland(grid: number[][]): number {
  const row = grid.length
  const col = grid[0].length
  let maxArea = 0

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      maxArea = Math.max(maxArea, getArea(grid, i, j))
    }
  }

  return maxArea
}

function getArea(grid: number[][], i: number, j: number): number {
  if (i < 0 || j < 0 || j > grid[0].length - 1 || i > grid.length - 1)
    return 0

  if (grid[i][j] === 1) {
    grid[i][j] = 0
    return 1 + getArea(grid, i - 1, j) + getArea(grid, i + 1, j) + getArea(grid, i, j - 1) + getArea(grid, i, j + 1)
  }

  return 0
}
// @lc code=end

export { maxAreaOfIsland }
