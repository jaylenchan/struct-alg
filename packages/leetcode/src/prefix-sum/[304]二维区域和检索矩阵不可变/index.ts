/*
 * @lc app=leetcode.cn id=304 lang=typescript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
class NumMatrix {
  private _prefixSum: number[][] = []

  constructor(matrix: number[][]) {
    if (matrix.length === 0 || matrix[0].length === 0)
      return
    this._prefixSum = this.createPrefixSum(matrix)
  }

  public sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    if (row1 === 0 && col1 === 0) {
      // 如果row1 = 0 && col1 = 0说明从(0,0)出发,直接使用定义求row2,col2即可
      return this._prefixSum[row2][col2]
    }
    else if (row1 === 0) {
      return this._prefixSum[row2][col2] - this._prefixSum[row2][col1 - 1]
    }
    else if (col1 === 0) {
      return this._prefixSum[row2][col2] - this._prefixSum[row1 - 1][col2]
    }
    return (
      this._prefixSum[row2][col2]
      - this._prefixSum[row2][col1 - 1]
      - this._prefixSum[row1 - 1][col2]
      + this._prefixSum[row1 - 1][col1 - 1]
    )
  }

  public createPrefixSum(matrix: number[][]): number[][] {
    const rows = matrix.length
    const cols = matrix[0].length

    const _prefixSum = Array.from({ length: rows }).fill(0).map(() => Array.from({ length: cols }).fill(0)) as number[][]

    for (let row = 0; row < rows; row++) {
      if (row === 0) {
        _prefixSum[row][0] = matrix[0][0]
      }
      else {
        _prefixSum[row][0] = _prefixSum[row - 1][0] + matrix[row][0]
      }
    }

    for (let col = 0; col < cols; col++) {
      if (col === 0) {
        _prefixSum[0][col] = matrix[0][0]
      }
      else {
        _prefixSum[0][col] = _prefixSum[0][col - 1] + matrix[0][col]
      }
    }

    for (let row = 1; row < rows; row++) {
      for (let col = 1; col < cols; col++) {
        _prefixSum[row][col]
          = _prefixSum[row][col - 1] + _prefixSum[row - 1][col] - _prefixSum[row - 1][col - 1] + matrix[row][col]
      }
    }

    return _prefixSum
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

export { NumMatrix }
