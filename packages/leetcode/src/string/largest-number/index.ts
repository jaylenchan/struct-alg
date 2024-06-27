/*
 * @lc app=leetcode.cn id=179 lang=typescript
 * @lcpr version=30204
 *
 * [179] 最大数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function largestNumber(nums: number[]): string {
  nums.sort((a, b) => {
    const newA = String(a)
    const newB = String(b)

    const A = newB + newA
    const B = newA + newB

    return Number(A) - Number(B)
  })

  let ans = ''
  let i = 0
  for (; i < nums.length; i++) {
    if (nums[i] !== 0) {
      break
    }
  }

  for (let j = i; j < nums.length; j++) {
    ans += nums[j]
  }

  return ans || '0'
}
// @lc code=end

/*
// @lcpr case=start
// [10,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,30,34,5,9]\n
// @lcpr case=end

 */
export { largestNumber }
