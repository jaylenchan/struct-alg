/*
 * @lc app=leetcode.cn id=349 lang=typescript
 * @lcpr version=30204
 *
 * [349] 两个数组的交集
 */

// @lcpr-template-start

// @lcpr-template-end
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

/*
// @lcpr case=start
// [1,2,2,1]\n[2,2]\n
// @lcpr case=end

// @lcpr case=start
// [4,9,5]\n[9,4,9,8,4]\n
// @lcpr case=end

 */
export { intersection }
