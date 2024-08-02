/*
 * @lc app=leetcode.cn id=394 lang=typescript
 * @lcpr version=30204
 *
 * [394] 字符串解码
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function decodeString(s: string): string {
  const timeStack = []
  const preLettersStack = []

  let time = 0
  let letters = ''

  for (const c of s) {
    if (isNumber(c)) {
      time = time * 10 + Number.parseInt(c)
    }
    else if (c === '[') {
      timeStack.push(time)
      preLettersStack.push(letters)

      time = 0
      letters = ''
    }
    else if (isLetter(c)) {
      letters += c
    }
    else {
      // c === ']'

      const curTimes = timeStack.pop()!

      const preLetters = preLettersStack.pop()!

      letters = preLetters + letters.repeat(curTimes)
    }
  }

  return letters
}

function isNumber(c: string): boolean {
  return typeof Number(c) === 'number' && !Number.isNaN(Number(c))
}

function isLetter(c: string): boolean {
  const set = new Set<string>(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])

  return set.has(c)
}
// @lc code=end

/*
// @lcpr case=start
// "3[a]2[bc]"\n
// @lcpr case=end

// @lcpr case=start
// "3[a2[c]]"\n
// @lcpr case=end

// @lcpr case=start
// "2[abc]3[cd]ef"\n
// @lcpr case=end

// @lcpr case=start
// "abc3[cd]xyz"\n
// @lcpr case=end

 */
export { decodeString }
