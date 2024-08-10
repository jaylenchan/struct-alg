/*
 * @lc app=leetcode.cn id=240 lang=typescript
 * @lcpr version=30204
 *
 * [240] 搜索二维矩阵 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0)
    return false

  return _searchMatrix(matrix, target, 0, 0, matrix.length - 1, matrix[0].length - 1)
}

function _searchMatrix(
  matrix: number[][],
  target: number,
  row1: number,
  col1: number,
  row2: number,
  col2: number,
): boolean {
  if (row1 === row2) {
    return _searchArr(matrix[row1], target, 0, matrix[0].length - 1)
  }

  if (matrix[row1][col2] === target) {
    return true
  }
  else if (matrix[row1][col2] > target) {
    return _searchMatrix(matrix, target, row1, col1, row2, col2 - 1)
  }
  else {
    return _searchMatrix(matrix, target, row1 + 1, col1, row2, col2)
  }
}

function _searchArr(arr: number[], target: number, left: number, right: number): boolean {
  if (left >= right)
    return arr[right] === target
  const mid = left + Math.floor((right - left) >> 1)

  if (arr[mid] === target) {
    return true
  }
  else if (arr[mid] > target) {
    return _searchArr(arr, target, left, mid - 1)
  }
  else {
    return _searchArr(arr, target, mid + 1, right)
  }
}
// @lc code=end

/*
// @lcpr case=start
// [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n5\n
// @lcpr case=end

// @lcpr case=start
// [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n20\n
// @lcpr case=end

 */
export const search_a_2_d_matrix_ii = { searchMatrix }
