/*
 * @lc app=leetcode.cn id=50 lang=typescript
 * @lcpr version=30204
 *
 * [50] Pow(x, n)
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1
  }
  else if (n === 1) {
    return x
  }
  else if (n < 0) {
    return 1 / myPow(x, -n)
  }

  if (n % 2 === 0) {
    return myPow(x * x, n / 2)
  }
  else {
    return x * myPow(x, n - 1)
  }
}
// @lc code=end

/*
// @lcpr case=start
// 2.00000\n10\n
// @lcpr case=end

// @lcpr case=start
// 2.10000\n3\n
// @lcpr case=end

// @lcpr case=start
// 2.00000\n-2\n
// @lcpr case=end

 */
export { myPow }
