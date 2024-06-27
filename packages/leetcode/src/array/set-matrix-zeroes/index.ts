/*
 * @lc app=leetcode.cn id=73 lang=typescript
 * @lcpr version=30204
 *
 * [73] 矩阵置零
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const firstRow = 0
  const firstCol = 0
  const lastRow = matrix.length - 1
  const lastCol = matrix[0].length - 1

  const flag = 2 ** 31

  for (let row = firstRow; row <= lastRow; row++) {
    for (let col = firstCol; col <= lastCol; col++) {
      if (matrix[row][col] === 0) {
        _setZeroes(matrix, row, col)
      }
    }
  }

  for (let row = firstRow; row <= lastRow; row++) {
    for (let col = firstCol; col <= lastCol; col++) {
      if (matrix[row][col] === flag) {
        matrix[row][col] = 0
      }
    }
  }
}

function _setZeroes(matrix: number[][], curRow: number, curCol: number): void {
  let left = curCol - 1
  let right = curCol + 1
  let top = curRow - 1
  let down = curRow + 1

  const lastRow = matrix.length - 1
  const lastCol = matrix[0].length - 1

  const flag = 2 ** 31

  matrix[curRow][curCol] = flag

  while (left >= 0 && matrix[curRow][left] !== 0) {
    matrix[curRow][left] = flag
    left--
  }

  while (right <= lastCol && matrix[curRow][right] !== 0) {
    matrix[curRow][right] = flag
    right++
  }

  while (top >= 0 && matrix[top][curCol] !== 0) {
    matrix[top][curCol] = flag
    top--
  }

  while (down <= lastRow && matrix[down][curCol] !== 0) {
    matrix[down][curCol] = flag
    down++
  }
}
// @lc code=end

/*
// @lcpr case=start
// [[1,1,1],[1,0,1],[1,1,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,1,2,0],[3,4,5,2],[1,3,1,5]]\n
// @lcpr case=end

 */
export { setZeroes }
