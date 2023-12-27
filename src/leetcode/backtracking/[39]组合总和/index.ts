/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const path: number[] = []
  const result: number[][] = []
  const sum = 0
  const startIndex = 0

  backtracking(candidates, target, sum, path, result, startIndex)

  return result
}
function backtracking(
  candidates: number[],
  target: number,
  sum: number,
  path: number[],
  result: number[][],
  startIndex: number
): void {
  if (sum > target) return
  if (sum == target) {
    result.push([...path])
    return
  }

  for (let i = startIndex; i < candidates.length; i++) {
    path.push(candidates[i])
    backtracking(candidates, target, sum + candidates[i], path, result, i)
    path.pop()
  }
}
// @lc code=end

export { combinationSum }
