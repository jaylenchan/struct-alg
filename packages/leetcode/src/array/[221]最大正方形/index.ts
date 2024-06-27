/*
 * @lc app=leetcode.cn id=221 lang=typescript
 *
 * [221] 最大正方形
 */

// @lc code=start
function maximalSquare(matrix: string[][]): number {
  if (matrix.length === 0 || matrix[0].length === 0)
    return 0

  const rows = matrix.length
  const cols = matrix[0].length
  let max = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === '1') {
        max = Math.max(max, 1 + maxSideLen(matrix, i, j, i + 1, j + 1))
      }
    }
  }

  return max ** 2
}

// 返回从(row,col)出发到(row1,col1)能够形成的最大正方形的边
function maxSideLen(matrix: string[][], row: number, col: number, row1: number, col1: number): number {
  if (!inArea(matrix, row, col) || !inArea(matrix, row1, col1))
    return 0

  // 因为已经知道了上一次处理的以(row1,col1)为右下角围成的区域确定是正方形，我们只需要判断扩大的区域即可，
  // 不需要重新再从出发点重新一个个判断是否是'1'

  // 判断新增的列col1,遍历col1这列上新增的格子（即遍历col1列的每一行）
  for (let i = row; i <= row1; i++) {
    if (matrix[i][col1] !== '1')
      return 0
  }

  // 判断新增的行，遍历row1这行上新增的格子（即遍历row1行的每一列）
  for (let j = col; j <= col1; j++) {
    if (matrix[row1][j] !== '1')
      return 0
  }

  return 1 + maxSideLen(matrix, row, col, row1 + 1, col1 + 1)
}

function inArea(matrix: string[][], row: number, col: number): boolean {
  return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length
}

// @lc code=end

export { maximalSquare }
