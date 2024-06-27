/*
 * @lc app=leetcode.cn id=20 lang=typescript
 * @lcpr version=30204
 *
 * [20] 有效的括号
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function isValid(s: string): boolean {
  if (!s || s.length < 2)
    return false
  const stack: string[] = []
  let i = 0

  const parenthesisSet = new Set<string>()
  parenthesisSet.add('(')
  parenthesisSet.add('[')
  parenthesisSet.add('{')

  const parenthesisMap = new Map<string, string>()
  parenthesisMap.set(')', '(')
  parenthesisMap.set(']', '[')
  parenthesisMap.set('}', '{')

  while (i < s.length) {
    if (parenthesisSet.has(s[i])) {
      stack.push(s[i])
    }
    else {
      const rightChar = s[i]
      const leftChar = parenthesisMap.get(rightChar)
      if (!leftChar)
        return false
      if (leftChar !== stack.pop())
        return false
      if (!parenthesisSet.has(leftChar))
        return false
    }

    i += 1
  }

  if (stack.length > 0)
    return false

  return true
}
// @lc code=end

/*
// @lcpr case=start
// "()"\n
// @lcpr case=end

// @lcpr case=start
// "()[]{}"\n
// @lcpr case=end

// @lcpr case=start
// "(]"\n
// @lcpr case=end

 */
export { isValid }
