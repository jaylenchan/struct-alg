/*
 * @lc app=leetcode.cn id=704 lang=typescript
 * @lcpr version=30204
 *
 * [704] 二分查找
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function search(nums: number[], target: number): number {
  return _search(nums, 0, nums.length - 1, target)
}

function _search(nums: number[], l: number, r: number, target: number): number {
  if (l > r)
    return -1

  const mid = Math.floor(l + (r - l) / 2)
  if (nums[mid] === target) {
    return mid
  }
  else if (nums[mid] > target) {
    return _search(nums, l, mid - 1, target)
  }
  else {
    return _search(nums, mid + 1, r, target)
  }
}
// @lc code=end

/*
// @lcpr case=start
// [-1,0,3,5,9,12]\n9\n
// @lcpr case=end

// @lcpr case=start
// [-1,0,3,5,9,12]\n2\n
// @lcpr case=end

 */
export { search }
