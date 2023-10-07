/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  if (tokens.length == 0) return 0

  const tokenStack: string[] = []

  for (const token of tokens) {
    if (token == '+' || token == '-' || token == '*' || token == '/') {
      compute(tokenStack, token)
    } else {
      tokenStack.push(token)
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return +tokenStack.pop()!
}

function compute(stack: string[], token: string): void {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const num1 = +stack.pop()!
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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

export default evalRPN

/**
 * 思路：栈
 * 1. 当发现数字的时候压栈
 * 2. 当发现是远算符号的时候，计算式子，分别弹出栈两个元素
 * 3. 细节：注意减法和除法，被减数应该是num2，减数是num1；被除数应该是num2.除数是num1。另外由于js当中除法问题，所以碰到大于等于0要向下取整，否则向上取整
 */
