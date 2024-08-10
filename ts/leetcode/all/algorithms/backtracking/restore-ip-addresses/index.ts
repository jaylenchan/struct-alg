/*
 * @lc app=leetcode.cn id=93 lang=typescript
 * @lcpr version=30204
 *
 * [93] 复原 IP 地址
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function restoreIpAddresses(s: string): string[] {
  const path: string[] = []
  const result: string[] = []

  backtracking(s, 0, path, result)

  return result
}

function backtracking(s: string, start: number, path: string[], result: string[]): void {
  if (path.length === 4) {
    if (path.join('').length === s.length) {
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
  if (Number.isNaN(Number.parseInt(s)))
    return false

  if (Number.parseInt(s[start]) === 0 && end > start)
    return false

  const curNum = Number.parseInt(s.slice(start, end + 1))
  return curNum >= 0 && curNum <= 255
}
// @lc code=end

/*
// @lcpr case=start
// "25525511135"\n
// @lcpr case=end

// @lcpr case=start
// "0000"\n
// @lcpr case=end

// @lcpr case=start
// "101023"\n
// @lcpr case=end

 */
export const restore_ip_addresses = { restoreIpAddresses }
