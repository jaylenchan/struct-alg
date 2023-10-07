/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 */

// @lc code=start
function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const map = new Map<number, number>()

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j]
      if (!map.has(sum)) {
        map.set(sum, 1)
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        map.set(sum, map.get(sum)! + 1)
      }
    }
  }

  let ans = 0
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const sum = nums3[i] + nums4[j]
      if (map.has(-sum)) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        ans += map.get(-sum)!
      }
    }
  }

  return ans
}
// @lc code=end

/**
 * #思路#
 * 本题指定给了四个整数数组，我们可以这么做：
 * 1. 枚举前两个数组的所有数字之和，放入map当中
 * 2. 枚举后两个数组的所有数字之和，如果后两个数组的数字之和当中是能够跟前两个数组的数字之和可以构成0的，则
 *    这两个数字之和一定是互为相反数。因此我们只需要在枚举过程中拿两个数组的数字之和的相反数，在map中寻找的到的话，
 *    直接取出相反数的次数，然后ans累加次数即可，比如一次就可以累加一次得到0，两次就是两次能够累加得到0.
 */

export default fourSumCount
