/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const numMap = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (!numMap.has(nums[i])) {
      numMap.set(nums[i], 0)
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    numMap.set(nums[i], numMap.get(nums[i])! + 1)
  }

  const result: number[] = []

  for (let i = 0; i < k; i++) {
    result[i] = nums[i]
    for (const option of numMap) {
      const [num, count] = option

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      result[i] = numMap.get(result[i])! > count ? result[i] : num
    }
    numMap.delete(result[i])
  }

  return result
}
// @lc code=end

export default topKFrequent
