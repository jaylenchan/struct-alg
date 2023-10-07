/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
  const path: string[] = []
  const result: string[] = []

  backtracking(s, 0, path, result)

  return result
}

function backtracking(
  s: string,
  start: number,
  path: string[],
  result: string[]
): void {
  if (path.length == 4) {
    if (path.join('').length == s.length) {
      result.push(path.join('.'))
      path = []
    }
    return
  }

  for (let end = start; end < s.length; end++) {
    if (isValid(s, start, end)) {
      path.push(s.slice(start, end + 1))
      backtracking(s, end + 1, path, result)
      path.pop()
    }
  }
}

function isValid(s: string, start: number, end: number): boolean {
  if (isNaN(parseInt(s))) return false

  if (parseInt(s[start]) == 0 && end > start) return false

  const curNum = parseInt(s.slice(start, end + 1))
  return curNum >= 0 && curNum <= 255
}

/**
 * 思路：做法类似分割回文串，不同得是回文串分割用的动态规划处理字符的有效性，这里自定义一个函数处理数字字符的有效性
 * 当递归到path的长度为4的时候，就应该停止了，因为ip最多只有四个
 * 同时我们还需要再path长度为4的时候，path里头的字符的长度加起来应该等于字符串的长度
 */
// @lc code=end

export default restoreIpAddresses
