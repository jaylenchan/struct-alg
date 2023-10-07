/*
 * @lc app=leetcode.cn id=171 lang=typescript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
  return _titleToNumber(columnTitle, columnTitle.length - 1, 0)
}

function _titleToNumber(title: string, y: number, index: number): number {
  if (y == 0) return ASCIndex(title[index])

  const curSum = Math.pow(26, y) * ASCIndex(title[index])

  return curSum + _titleToNumber(title.slice(index + 1), --y, index)
}

function ASCIndex(letter: string): number {
  return letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1
}

// @lc code=end

export default titleToNumber

/**
 * 思路：
 * 1. 从前往后遍历字符串，每个被遍历到的数的值是：Math.pow(26， 字符串长度-1)* 当前数对应的值
 * 2. 用当前数做公式求结果 ，然后用这个结果 + 递归过程
 * 3. 返回最终结果
 */
