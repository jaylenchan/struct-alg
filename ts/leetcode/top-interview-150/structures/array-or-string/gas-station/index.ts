/*
 * @lc app=leetcode.cn id=134 lang=typescript
 * @lcpr version=30204
 *
 * [134] 加油站
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
  /**
   * 题目意思
   * gas数组中的每个元素表示每个加油站有多少升汽油
   *     gas = [1,2,3,4,5]
   *     gas[0] = 1 表示第0个位置的加油站拥有1升油
   *     gas[1] = 2 表示第1个位置的加油站拥有2升油
   *
   * cos数组中的每个元素表示要到达下一个加油站消耗多少升汽油
   *      cos = [3,4,5,1,2]
   *      cos[0] = 3 表示要到达下一个加油站（即位置1的加油站）需要消耗3升油
   *      cos[1] = 4 表示要到达下一个加油站（即位置2的加油站）需要消耗4升油
   *
   *  以上的两个数组的关系就是：到位置i加油站加gas[i]的油，是否足够消耗cos[i]的油后到达下一个加油站
   *  题目的需求是：判断能不能找到一个i位置，汽车从i位置出发，最终能够绕一圈回到i位置
   *
   * NOTE： 这个暴力解法：超时了！！
   */
  const n = gas.length;
  for (let i = 0; i < gas.length; i++) {
    let leftGas = gas[i];
    let round = 0

    for (let loc = i; ;) {
      if (round === 1 && loc === i) {
        return i;
      }
      // 看下能不能到下一个站，如果剩余的油能大于到下一个地方需要的油，就可以到达
      // 意思就是说loc如果走完了最后一个站点，要绕回来的话位置变0从头开始跑，否则达到下一站点的位置loc+1
      // 到达的时候剩余的油要计算更新
      const curCost = cost[loc] // 到达下一个站点需要的油
      if (leftGas >= curCost) {
        if (loc === n - 1) {
          loc = 0;
          leftGas = leftGas + gas[0] - cost[n - 1]
          round = 1;
        }
        else {
          leftGas = leftGas + gas[loc + 1] - curCost // 更新算下到下一站后剩下的油是多少
          loc++
        }
      }
      else {
        break;
      }
    }
  }
  return -1;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n[3,4,5,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,4]\n[3,4,3]\n
// @lcpr case=end

 */

export const gas_station = { canCompleteCircuit }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [134] 加油站
     */
    gas_station: {
      canCompleteCircuit: (gas: number[], cost: number[]) => number
    }
  }
}
