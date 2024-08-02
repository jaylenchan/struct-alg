/*
 * @lc app=leetcode.cn id=739 lang=typescript
 * @lcpr version=30204
 *
 * [739] 每日温度
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  if (temperatures.length === 0)
    return []

  // 单调递减栈
  const stack: number[] = []
  const temSize = temperatures.length
  const ans: number[] = []

  // 枚举每一天的温度
  for (let i = 0; i < temSize; i++) {
    if (stack.length === 0) {
      stack.push(i)
    }
    else {
      while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
        const target = stack.pop()!
        ans[target] = i - target
      }

      stack.push(i)
    }
  }

  while (stack.length > 0) {
    const target = stack.pop()!
    ans[target] = 0
  }

  return ans
}
// @lc code=end

/*
// @lcpr case=start
// [73,74,75,71,69,72,76,73]\n
// @lcpr case=end

// @lcpr case=start
// [30,40,50,60]\n
// @lcpr case=end

// @lcpr case=start
// [30,60,90]\n
// @lcpr case=end

 */
export { dailyTemperatures }
