/*
 * @lc app=leetcode.cn id=347 lang=typescript
 * @lcpr version=30204
 *
 * [347] 前 K 个高频元素
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const numMap = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (!numMap.has(nums[i])) {
      numMap.set(nums[i], 0)
    }

    numMap.set(nums[i], numMap.get(nums[i])! + 1)
  }

  const result: number[] = []

  for (let i = 0; i < k; i++) {
    result[i] = nums[i]
    for (const option of numMap) {
      const [num, count] = option

      result[i] = numMap.get(result[i])! > count ? result[i] : num
    }
    numMap.delete(result[i])
  }

  return result
}
// @lc code=end

/*
// @lcpr case=start
// [1,1,1,2,2,3]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

 */
export { topKFrequent }
