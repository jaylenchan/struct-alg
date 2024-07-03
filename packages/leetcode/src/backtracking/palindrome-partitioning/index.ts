/*
 * @lc app=leetcode.cn id=131 lang=typescript
 * @lcpr version=30204
 *
 * [131] 分割回文串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function partition(s: string): string[][] {
  if (s.length === 0)
    return []

  const dp = checkStr(s)
  const ans: string[][] = []
  const path: string[] = []

  backtracking(s, dp, 0, path, ans)

  return ans
}

function backtracking(s: string, dp: boolean[][], start: number, path: string[], ans: string[][]): void {
  if (start === s.length) {
    ans.push([...path])
    return
  }

  for (let end = start; end < s.length; end++) {
    if (dp[start][end]) {
      path.push(s.slice(start, end + 1))
      backtracking(s, dp, end + 1, path, ans)
      path.pop()
    }
  }
}

function checkStr(s: string): boolean[][] {
  // dp[i][j]表示从 s[i:j]是不是回文串
  const dp: boolean[][] = Array.from({ length: s.length }).fill(false).map(() => Array.from({ length: s.length }).fill(false)) as boolean[][]

  // dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
  // 从i+1 推i，从j-1推j，因此要从下往上，从左往右遍历
  // 而且j至少从i开始遍历，因为j>=i
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          // 情况1： 如果只有1个字符，j === i,j - i = 0  比如:'a'
          // 情况2： 如果字符只有2个，j - i = 1, 比如 'aa'这种时候一定是回文串
          dp[i][j] = true
        }
        else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }
    }
  }

  return dp
}
// @lc code=end

/*
// @lcpr case=start
// "aab"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n
// @lcpr case=end

 */
export { partition }
