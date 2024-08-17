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
  // 如果可以让你反悔在哪天买入股票，你一定会选择反悔到最低的价格的那天买
  // 问题是选最低的价格，然后用来计算一定是最大利润吗？
  let minPrice = prices[0] // 代表前i天
  let maxPro = 0;

  for (let i = 1; i < prices.length; i++) {
    // 碰到第i天看到比之前买入的价格还少
    // 那就反悔重新买入
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    }
    else {
      // 否则的话，我们计算当天的卖出利润
      // 更新前i天的最大利润 = Math.max(前i-1天的最大利润maxPro，第i天的价格减去历史最低买入价格的利润 )
      maxPro = Math.max(maxPro, prices[i] - minPrice)
    }
  }
  return maxPro
};
// @lc code=end

/*
// @lcpr case=start
// [7,1,5,3,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

 */

export const best_time_to_buy_and_sell_stock = { maxProfit }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [121] 买卖股票的最佳时机
     */
    best_time_to_buy_and_sell_stock: {
      maxProfit: (prices: number[]) => number
    }
  }
}
