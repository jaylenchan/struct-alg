/*
 * @lc app=leetcode.cn id=78 lang=typescript
 * @lcpr version=30204
 *
 * [78] 子集
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function subsets(nums: number[]): number[][] {
  const path: number[] = []
  const result: number[][] = []
  const startIndex = 0

  backtracking(nums, path, result, startIndex)

  return result
}

function backtracking(nums: number[], path: number[], result: number[][], startIndex: number): void {
  if (startIndex > nums.length) {
    return
  }
  else {
    result.push([...path])
  }

  for (let i = startIndex; i < nums.length; i++) {
    path.push(nums[i])
    backtracking(nums, path, result, ++startIndex)
    path.pop()
  }
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */
export { subsets }
