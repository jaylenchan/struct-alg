/*
 * @lc app=leetcode.cn id=79 lang=typescript
 * @lcpr version=30204
 *
 * [79] 单词搜索
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function exist(board: string[][], word: string): boolean {
  const wordIndex = 0
  const lastRow = board.length - 1
  const lastCol = board[0].length - 1
  const positions: number[][] = [
    [-1, 0], // 上
    [1, 0], // 下
    [0, -1], // 左
    [0, 1], // 右
  ]
  const searchSet = new Set<string>()

  let isExist = false

  for (let i = 0; i <= lastRow; i++) {
    for (let j = 0; j <= lastCol; j++) {
      search(board, word, i, j, wordIndex, '', searchSet, positions)

      if (isExist)
        return true
    }
  }

  return isExist

  // 判断当前字符是否在word对应位置上的字符相同
  function search(
    board: string[][],
    word: string,
    row: number,
    col: number,
    index: number,
    curWord: string,
    searchSet: Set<string>,
    positions: number[][],
  ): void {
    if (searchSet.has(`${row}${col}`)) {
      return
    }

    // 越界控制：搜索最大不能超过word能够对应的索引
    if (index > word.length - 1) {
      return
    }

    if (word[index] !== board[row][col])
      return

    searchSet.add(`${row}${col}`)
    curWord += board[row][col]
    if (curWord === word) {
      isExist = true
    }
    // 说明当前在搜索到的字符board[row][col]跟字符串对应位置上的字符word[index]相同，继续搜索
    for (const position of positions) {
      const newRow = row + position[0]
      const newCol = col + position[1]

      if (inArea(board, newRow, newCol) && inWord(word, index + 1)) {
        search(board, word, newRow, newCol, index + 1, curWord, searchSet, positions)
      }
    }

    searchSet.delete(`${row}${col}`)
  }
}

/** 判断指针指向的word位置是否合法 */
function inWord(word: string, index: number): boolean {
  return index < word.length
}

/** 判断当前位置是否在矩阵当中 */
function inArea(board: string[][], row: number, col: number): boolean {
  const startRow = 0
  const lastRow = board.length - 1
  const startCol = 0
  const lastCol = board[0].length - 1

  return row >= startRow && row <= lastRow && col >= startCol && col <= lastCol
}
// @lc code=end

/*
// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"\n
// @lcpr case=end

// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"SEE"\n
// @lcpr case=end

// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCB"\n
// @lcpr case=end

 */
export const word_search = { exist }
