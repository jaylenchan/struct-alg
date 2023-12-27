/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */
// @lc code=start
function combine(candidates: number[], start: number, target: number, path: number[], result: number[][]): void {
  if (target <= 0) {
    if (target == 0) {
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
    while (candidates[i + 1] == candidates[i]) {
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

export { combinationSum2 }
