/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

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

export { maxProfit }
