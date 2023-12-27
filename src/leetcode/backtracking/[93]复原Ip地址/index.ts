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

function backtracking(s: string, start: number, path: string[], result: string[]): void {
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

// @lc code=end

export { restoreIpAddresses }
