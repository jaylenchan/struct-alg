/*
 * @lc app=leetcode.cn id=326 lang=typescript
 * @lcpr version=30204
 *
 * [326] 3 的幂
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function isPowerOfThree(n: number): boolean {
  if (n === 1)
    return true
  let base = 3

  while (true) {
    if (base < n) {
      base *= 3
    }
    else if (base === n) {
      return true
    }
    else {
      return false
    }
  }
}
// @lc code=end

/*
// @lcpr case=start
// 27\n
// @lcpr case=end

// @lcpr case=start
// 0\n
// @lcpr case=end

// @lcpr case=start
// 9\n
// @lcpr case=end

// @lcpr case=start
// 45\n
// @lcpr case=end

 */
export { isPowerOfThree }
