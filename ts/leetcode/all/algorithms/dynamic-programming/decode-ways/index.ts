/*
 * @lc app=leetcode.cn id=91 lang=typescript
 * @lcpr version=30204
 *
 * [91] 解码方法
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function numDecodings(s: string): number {
  const len = s.length

  const dp = [len + 1].fill(0)

  dp[0] = 1

  for (let i = 1; i <= len; i++) {
    if (s.charAt(i - 1) !== '0') {
      dp[i] = dp[i - 1]
    }

    // 判断截取两个是否符合
    if (i >= 2 && (s.charAt(i - 2) === '1' || (s.charAt(i - 2) === '2' && s.charAt(i - 1) <= '6'))) {
      dp[i] += dp[i - 2]
    }
  }

  return dp[len]
}
// @lc code=end

/*
// @lcpr case=start
// "12"\n
// @lcpr case=end

// @lcpr case=start
// "226"\n
// @lcpr case=end

// @lcpr case=start
// "06"\n
// @lcpr case=end

 */
export { numDecodings }
