/*
 * @lc app=leetcode.cn id=40 lang=typescript
 * @lcpr version=30204
 *
 * [40] 组合总和 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function combine(candidates: number[], start: number, target: number, path: number[], result: number[][]): void {
  if (target <= 0) {
    if (target === 0) {
      result.push([...path])
    }
    return
  }

  for (let i = start; i < candidates.length; i++) {
    const cur = candidates[i]
    if (cur <= target) {
      path.push(cur)
      combine(candidates, i + 1, target - cur, path, result)
      path.pop()
    }
    while (candidates[i + 1] === candidates[i]) {
      i++
    }
  }
}

function combinationSum2(candidates: number[], target: number): number[][] {
  const path: number[] = []
  const result: number[][] = []

  candidates.sort((a, b) => a - b)
  combine(candidates, 0, target, path, result)

  return result
}
// @lc code=end

/*
// @lcpr case=start
// [10,1,2,7,6,1,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2,5,2,1,2]\n5\n
// @lcpr case=end

 */
export { combinationSum2 }
