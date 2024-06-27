/*
 * @lc app=leetcode.cn id=289 lang=typescript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
  if (board.length === 0 || board[0].length === 0)
    return

  const rows = board.length
  const cols = board[0].length
  const help: boolean[][] = new Array(rows).fill(false).map(() => new Array(cols).fill(false))

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      help[i][j] = isAlive(board, i, j)
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      board[i][j] = help[i][j] ? 1 : 0
    }
  }
}

/**
 * 判断活细胞是否存活|死细胞是否复活
 */
function isAlive(board: number[][], x: number, y: number): boolean {
  const positions = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 1],
    [-1, -1],
    [-1, 1],
  ]
  let count = 0
  const alive = board[x][y] === 1

  for (const [offsetX, offsetY] of positions) {
    const newX = x + offsetX
    const newY = y + offsetY

    if (inArea(board, newX, newY)) {
      if (board[newX][newY] === 1)
        count++
    }
  }

  if (alive) {
    return count >= 2 && count <= 3
  }

  return count === 3
}

function inArea(board: number[][], row: number, col: number): boolean {
  return row >= 0 && row < board.length && col >= 0 && col < board[0].length
}
// @lc code=end

export { gameOfLife }
