/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  if (digits.length == 0) {
    return []
  }

  const lettersMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const result: string[] = []
  const path: string[] = []

  backtracking(digits, 0, result, path, lettersMap)

  return result
}

function backtracking(digits: string, index: number, result: string[], path: string[], lettersMap: string[]): void {
  if (index == digits.length) {
    result.push(path.join(''))
    return
  }

  const letters = lettersMap[+digits[index]]

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i]

    path.push(letter)
    backtracking(digits, index + 1, result, path, lettersMap)
    path.pop()
  }
}
// @lc code=end

export { letterCombinations }
