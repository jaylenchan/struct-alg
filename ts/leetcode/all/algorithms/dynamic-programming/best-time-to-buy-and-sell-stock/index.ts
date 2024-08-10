/*
 * @lc app=leetcode.cn id=121 lang=typescript
 * @lcpr version=30204
 *
 * [121] 买卖股票的最佳时机
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxProfit(prices: number[]): number {
  // dp[i] 表示0-i天（包括第i天）的最小价格

  const dp: number[] = []
  let max = 0

  dp[0] = prices[0]

  for (let i = 1; i < prices.length; i++) {
    dp[i] = Math.min(dp[i - 1], prices[i])
    const profit = prices[i] - dp[i - 1]

    max = Math.max(max, profit)
  }

  return max
}
// @lc code=end

/*
// @lcpr case=start
// [7,1,5,3,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

 */
export { maxProfit }
