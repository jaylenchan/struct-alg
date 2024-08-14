/*
 * @lc app=leetcode.cn id=77 lang=typescript
 * @lcpr version=30204
 *
 * [77] 组合
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function combine(n: number, k: number): number[][] {
  /**
   * 题目意思
   * 求数字范围在1到n的k个数的组合。比如数字在1-4，k为2，就是所有数字在1到4的2个数字的组合
   */

  const ans: number[][] = []

  backtrack(ans, [], 0, 1, n, k);

  return ans;
};

function backtrack(ans: number[][], res: number[], count: number, start: number, n: number, k: number): void {
  // 取到k个停止
  if (count === k) {
    ans.push(res.slice())

    return;
  }

  // 从1-n中取
  // 通过设置起始的start来过滤掉之前的数字
  // 比如1开始，则分支只能从2-3-4取
  // 比如2开始，则分支只能从3-4取
  // 比如3开始，则分支只能从4取
  // 从4开始，则分支结束，因为下一个start就是5，相当于backtrack走了个寂寞
  for (let i = start; i <= n; i++) {
    backtrack(ans, res.concat([i]), count + 1, i + 1, n, k)
  }
}
// @lc code=end

/*
// @lcpr case=start
// 4\n2\n
// @lcpr case=end

// @lcpr case=start
// 1\n1\n
// @lcpr case=end

 */

export const combinations = { combine };

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [77] 组合
     */
    combinations: {
      combine: (n: number, k: number) => number[][]
    }
  }
}
