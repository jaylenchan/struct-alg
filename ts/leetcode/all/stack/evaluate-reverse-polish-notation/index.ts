/*
 * @lc app=leetcode.cn id=150 lang=typescript
 * @lcpr version=30204
 *
 * [150] 逆波兰表达式求值
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function evalRPN(tokens: string[]): number {
  if (tokens.length === 0)
    return 0

  const tokenStack: string[] = []

  for (const token of tokens) {
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      compute(tokenStack, token)
    }
    else {
      tokenStack.push(token)
    }
  }

  return +tokenStack.pop()!
}

function compute(stack: string[], token: string): void {
  const num1 = +stack.pop()!

  const num2 = +stack.pop()!
  let result = ''
  switch (token) {
    case '+': {
      result = String(num2 + num1)
      break
    }
    case '-': {
      result = String(num2 - num1)
      break
    }
    case '*': {
      result = String(num2 * num1)
      break
    }
    case '/': {
      let ans = num2 / num1
      ans = ans >= 0 ? Math.floor(ans) : Math.ceil(ans)
      result = String(ans)
      break
    }
  }
  stack.push(result)
}
// @lc code=end

/*
// @lcpr case=start
// ["2","1","+","3","*"]\n
// @lcpr case=end

// @lcpr case=start
// ["4","13","5","/","+"]\n
// @lcpr case=end

// @lcpr case=start
// ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]\n
// @lcpr case=end

 */
export { evalRPN }
