/*
 * @lc app=leetcode.cn id=36 lang=typescript
 * @lcpr version=30204
 *
 * [36] 有效的数独
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  const rowMap = new Map<number, Set<string>>()
  const colMap = new Map<number, Set<string>>()
  const boxMap = new Map<string, Set<string>>()

  const rows = board.length
  const cols = board[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!rowMap.has(i)) {
        rowMap.set(i, new Set())
      }
      if (!colMap.has(j)) {
        colMap.set(j, new Set())
      }
      if (!boxMap.has(`${Math.floor(i / 3)}-${Math.floor(j / 3)}`)) {
        boxMap.set(`${Math.floor(i / 3)}-${Math.floor(j / 3)}`, new Set())
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const target = board[i][j]
      if (target !== '.') {
        if (

          rowMap.get(i)!.has(target)

          || colMap.get(j)!.has(target)

          || boxMap.get(`${Math.floor(i / 3)}-${Math.floor(j / 3)}`)!.has(target)
        ) {
          return false
        }

        rowMap.get(i)!.add(target)

        colMap.get(j)!.add(target)

        boxMap.get(`${Math.floor(i / 3)}-${Math.floor(j / 3)}`)!.add(target)
      }
    }
  }

  return true
}

// @lc code=end

/*
// @lcpr case=start
// [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]\n
// @lcpr case=end

// @lcpr case=start
// [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]\n
// @lcpr case=end

 */
export { isValidSudoku }
