/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  let top = 0
  let left = 0
  let down = matrix.length - 1
  let right = matrix[0].length - 1

  while (left < right) {
    _rotate(matrix, top++, left++, down--, right--)
  }
}

function _rotate(
  matrix: number[][],
  top: number,
  left: number,
  down: number,
  right: number
): void {
  const groupCount = right - left

  for (let i = 0; i < groupCount; i++) {
    // 在这里将每个小组的四个方位的对应元素进行交换
    const temp = matrix[top][left + i] //  保存左上角
    // 左上角: 顺时针90度就是左上被左下替换
    matrix[top][left + i] = matrix[down - i][left]
    // 左下角: 顺时针90度就是左下被右下替换
    matrix[down - i][left] = matrix[down][right - i]
    // 右下角: 顺时针90度就是右下被右上替换
    matrix[down][right - i] = matrix[top + i][right]
    // 右上角: 顺时针90度就是右上被左上替换
    matrix[top + i][right] = temp
  }
}

// @lc code=end

export default rotate

/**
 * 思路：一圈一圈地看，每次都处理最外层一圈，然后不断缩小圈圈
 * 替换的时候，4个方位的角的替换时序是，逆时针方向替换，先替换掉左上，再替换左下，再替换右下，再替换右上。
 */
