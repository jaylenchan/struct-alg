/*
 * @lc app=leetcode.cn id=118 lang=typescript
 * @lcpr version=30204
 *
 * [118] 杨辉三角
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function generate(numRows: number): number[][] {
  const dp = new Array(numRows).fill(0).map(() => new Array(numRows).fill(0))

  for (let i = 0; i < numRows; i++) {
    dp[i][0] = 1
  }

  for (let i = 1; i < numRows; i++) {
    for (let j = 1; j < numRows; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
    }
  }

  // 除0操作
  const row = dp.length
  const col = dp[0].length
  for (let i = 0; i < row; i++) {
    let popCount = col - (i + 1)
    while (popCount > 0) {
      dp[i].pop()
      popCount -= 1
    }
  }

  return dp
}
// @lc code=end

/*
// @lcpr case=start
// 5\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
export { generate }
