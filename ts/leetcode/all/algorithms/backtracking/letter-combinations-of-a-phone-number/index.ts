/*
 * @lc app=leetcode.cn id=17 lang=typescript
 * @lcpr version=30204
 *
 * [17] 电话号码的字母组合
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return []
  }

  const lettersMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const result: string[] = []
  const path: string[] = []

  backtracking(digits, 0, result, path, lettersMap)

  return result
}

function backtracking(digits: string, index: number, result: string[], path: string[], lettersMap: string[]): void {
  if (index === digits.length) {
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

/*
// @lcpr case=start
// "23"\n
// @lcpr case=end

// @lcpr case=start
// ""\n
// @lcpr case=end

// @lcpr case=start
// "2"\n
// @lcpr case=end

 */
export { letterCombinations }
