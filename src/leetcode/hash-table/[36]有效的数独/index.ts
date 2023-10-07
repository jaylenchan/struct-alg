/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */

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
      if (target != '.') {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          rowMap.get(i)!.has(target) ||
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          colMap.get(j)!.has(target) ||
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          boxMap.get(`${Math.floor(i / 3)}-${Math.floor(j / 3)}`)!.has(target)
        ) {
          return false
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        rowMap.get(i)!.add(target)
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        colMap.get(j)!.add(target)
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        boxMap.get(`${Math.floor(i / 3)}-${Math.floor(j / 3)}`)!.add(target)
      }
    }
  }

  return true
}

/**
 * 题目给到的是固定9*9的宫格，要我们按规则判断
 * - 每行不能重复数字
 * - 每列不能重复数字
 * - 每个3*3的盒子不能重复数字
 *
 * 思路：
 * 1. 对于每行的判断，我们建立一个行表，存储这行遍历到的数字们
 * 2. 对于每列的判断，我们建立一个列表，存储这列遍历道德数字们
 * 3. 对于每个盒子的判断，我们上升一个纬度来看，脑海中抹除掉小格子，我们只看大格子
 *    - 其实就变成是（9/3） * (9/3)的矩阵，也就是3*3的矩阵了
 *    - 我们在遍历的时候通过row/3 和 col /3 就可以将每个小格子对应到新矩阵每个盒子的坐标上（类比每三个小格子为一个单位，相当于放大了的感觉）
 *    - 于是我们可以建立一个表，表用字符串做key，每个key的形式是`row-col`，用这个key代表我们的每个大盒子，然后宏观角度直接判断这个大盒子里头有没有放过遍历的数字就好
 * 4. 如果对于遍历到的是空格我们直接跳过就好
 */
// @lc code=end

export default isValidSudoku
