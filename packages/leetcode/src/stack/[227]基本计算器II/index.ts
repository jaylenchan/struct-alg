/*
 * @lc app=leetcode.cn id=227 lang=typescript
 *
 * [227] 基本计算器 II
 */
// @lc code=start
function calculate(s: string): number {
  s = removeSpace(s)

  const deque: string[] = []
  let cur = 0

  for (let i = 0; i < s.length; i++) {
    if (isNumber(s[i])) {
      cur = cur * 10 + +s[i]
      if (i + 1 === s.length) {
        cur = checkHighOp(deque, cur)
        deque.push(String(cur))
        break
      }
    }
    else {
      const op = s[i]
      cur = checkHighOp(deque, cur)
      deque.push(String(cur))
      deque.push(op)
      cur = 0
    }
  }

  return compute(deque)
}

function compute(deque: string[]): number {
  if (deque.length === 1)
    return +deque.shift()!

  let ans = 0
  while (deque.length > 0) {
    const num1 = +deque.shift()!

    const op = deque.shift()!

    const num2 = +deque.shift()!

    switch (op) {
      case '+': {
        ans += num1 + num2
        break
      }
      case '-': {
        ans += num1 - num2
        break
      }
    }

    if (deque.length > 0) {
      deque.unshift(String(ans))
      ans = 0
    }
  }

  return ans
}

function checkHighOp(deque: string[], cur: number): number {
  if (isHighOp(deque[deque.length - 1])) {
    const highOp = deque.pop()!

    const lastNum = +deque.pop()!

    switch (highOp) {
      case '*': {
        cur = lastNum * cur
        break
      }
      case '/': {
        cur = lastNum / cur
        cur = cur >= 0 ? Math.floor(cur) : Math.ceil(cur)
        break
      }
    }
  }
  else {
    const op = deque.pop()
    if (op) {
      deque.push(String(compute(deque)))
      deque.push(op)
    }
  }
  return cur
}

function isHighOp(ch: string): boolean {
  return ['*', '/'].includes(ch)
}

function isNumber(ch: string): boolean {
  return !['+', '-', '*', '/'].includes(ch)
}

function removeSpace(s: string): string {
  return s.replace(/\s/g, '')
}
// @lc code=end

export { calculate }
