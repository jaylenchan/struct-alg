/*
 * @lc app=leetcode.cn id=268 lang=typescript
 * @lcpr version=30204
 *
 * [268] 丢失的数字
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function missingNumber(nums: number[]): number {
  const set = new Set<number>(nums)
  let num = -1

  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) {
      num = i
      break
    }
  }

  return num
}
// @lc code=end

/*
// @lcpr case=start
// [3,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [9,6,4,2,3,5,7,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */
export { missingNumber }
