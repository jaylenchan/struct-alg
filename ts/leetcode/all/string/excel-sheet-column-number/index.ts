/*
 * @lc app=leetcode.cn id=171 lang=typescript
 * @lcpr version=30204
 *
 * [171] Excel 表列序号
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function titleToNumber(columnTitle: string): number {
  return _titleToNumber(columnTitle, columnTitle.length - 1, 0)
}

function _titleToNumber(title: string, y: number, index: number): number {
  if (y === 0)
    return ASCIndex(title[index])

  const curSum = 26 ** y * ASCIndex(title[index])

  return curSum + _titleToNumber(title.slice(index + 1), --y, index)
}

function ASCIndex(letter: string): number {
  return letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1
}

// @lc code=end

/*
// @lcpr case=start
// "A"\n
// @lcpr case=end

// @lcpr case=start
// "AB"\n
// @lcpr case=end

// @lcpr case=start
// "ZY"\n
// @lcpr case=end

 */
export { titleToNumber }
