/*
 * @lc app=leetcode.cn id=287 lang=typescript
 * @lcpr version=30204
 *
 * [287] 寻找重复数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findDuplicate(nums: number[]): number {
  let duplicate = -1

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        duplicate = nums[j]
        return duplicate
      }
    }
  }

  return duplicate
}
// @lc code=end

/*
// @lcpr case=start
// [1,3,4,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,1,3,4,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,3,3,3,3]\n
// @lcpr case=end

 */
export { findDuplicate }
