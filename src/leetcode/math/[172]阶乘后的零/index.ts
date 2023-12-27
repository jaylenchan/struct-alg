/*
 * @lc app=leetcode.cn id=172 lang=typescript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
function trailingZeroes(n: number): number {
  let count = 0
  while (n / 5 != 0) {
    count += Math.floor(n / 5)
    n /= 5
  }

  return count
}

// @lc code=end

export { trailingZeroes }
