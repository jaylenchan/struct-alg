/*
 * @lc app=leetcode.cn id=326 lang=typescript
 *
 * [326] 3 的幂
 */

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

export { isPowerOfThree }
