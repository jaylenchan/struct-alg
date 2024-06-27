/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const hashSet = new Set<number>()
  const result: number[] = []

  nums1.forEach(num => hashSet.add(num))

  for (let i = 0; i < nums2.length; i++) {
    if (hashSet.has(nums2[i])) {
      result.push(nums2[i])
      hashSet.delete(nums2[i])
    }
  }

  return result
}
// @lc code=end

export { intersection }
