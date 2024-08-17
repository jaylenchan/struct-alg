/*
 * @lc app=leetcode.cn id=122 lang=typescript
 * @lcpr version=30204
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxProfit(prices: number[]): number {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  };

  return profit
}
// @lc code=end

/*
// @lcpr case=start
// [7,1,5,3,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

 */

export const best_time_to_buy_and_sell_stock_ii = { maxProfit }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [122] 买卖股票的最佳时机 II
     */
    best_time_to_buy_and_sell_stock_ii: {
      maxProfit: (prices: number[]) => number
    }
  }
}
