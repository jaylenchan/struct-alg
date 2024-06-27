/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = []
  let firstRow = 0
  let lastRow = matrix.length - 1
  let firstCol = 0
  let lastCol = matrix[0].length - 1

  while (firstRow <= lastRow && firstCol <= lastCol) {
    _spiralOrder(matrix, firstRow++, lastRow--, firstCol++, lastCol--, result)
  }

  return result
}

function _spiralOrder(
  matrix: number[][],
  top: number,
  down: number,
  left: number,
  right: number,
  result: number[],
): void {
  const firstRow = top
  const firstCol = left
  const lastRow = down
  const lastCol = right

  if (top === down) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
  }
  else if (left === right) {
    for (let i = top; i <= down; i++) {
      result.push(matrix[i][left])
    }
  }
  else {
    while (left < lastCol) {
      result.push(matrix[firstRow][left])
      left++
    }

    while (top < lastRow) {
      result.push(matrix[top][lastCol])
      top++
    }

    while (right > firstCol) {
      result.push(matrix[lastRow][right])
      right--
    }

    while (down > firstRow) {
      result.push(matrix[down][firstCol])
      down--
    }
  }
}

// @lc code=end

export { spiralOrder }
