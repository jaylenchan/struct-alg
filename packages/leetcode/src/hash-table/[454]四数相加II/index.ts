/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 */

// @lc code=start
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const map = new Map<number, number>()

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j]
      if (!map.has(sum)) {
        map.set(sum, 1)
      }
      else {
        map.set(sum, map.get(sum)! + 1)
      }
    }
  }

  let ans = 0
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const sum = nums3[i] + nums4[j]
      if (map.has(-sum)) {
        ans += map.get(-sum)!
      }
    }
  }

  return ans
}
// @lc code=end

export { fourSumCount }
