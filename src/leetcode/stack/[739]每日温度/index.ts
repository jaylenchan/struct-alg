/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */
// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  if (temperatures.length == 0) return []

  // 单调递减栈
  const stack: number[] = []
  const temSize = temperatures.length
  const ans: number[] = []

  // 枚举每一天的温度
  for (let i = 0; i < temSize; i++) {
    if (stack.length == 0) {
      stack.push(i)
    } else {
      while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const target = stack.pop()!
        ans[target] = i - target
      }

      stack.push(i)
    }
  }

  while (stack.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const target = stack.pop()!
    ans[target] = 0
  }

  return ans
}
// @lc code=end

export { dailyTemperatures }
