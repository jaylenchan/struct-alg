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
  const path: number[] = []
  const result: number[][] = []

  backtraking(n, k, path, result, 1)

  return result
}

function backtraking(maxNum: number, combineNum: number, path: number[], result: number[][], startIndex: number): void {
  if (path.length === combineNum) {
    result.push([...path])
    return
  }

  for (let i = startIndex; i <= maxNum; i++) {
    path.push(i)
    backtraking(maxNum, combineNum, path, result, ++startIndex)
    path.pop()
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
export { combine }
