/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
function decodeString(s: string): string {
  const timeStack = []
  const preLettersStack = []

  let time = 0
  let letters = ''

  for (const c of s) {
    if (isNumber(c)) {
      time = time * 10 + parseInt(c)
    } else if (c == '[') {
      timeStack.push(time)
      preLettersStack.push(letters)

      time = 0
      letters = ''
    } else if (isLetter(c)) {
      letters += c
    } else {
      // c == ']'
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const curTimes = timeStack.pop()!
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const preLetters = preLettersStack.pop()!

      letters = preLetters + letters.repeat(curTimes)
    }
  }

  return letters
}

function isNumber(c: string): boolean {
  return typeof Number(c) == 'number' && !isNaN(Number(c))
}

function isLetter(c: string): boolean {
  // prettier-ignore
  const set = new Set<string>(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])

  return set.has(c)
}

// @lc code=end

export { decodeString }
