/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x === 0 || x === 1)
    return x

  const left = 1
  const right = Math.floor(x / 2)

  return _mysqrt(x, left, right)
}

function _mysqrt(x: number, left: number, right: number): number {
  if (left > right)
    return right

  const mid = left + (Math.floor(right - left) >> 1)

  const temp = mid * mid
  if (temp === x) {
    return mid
  }
  else if (temp > x) {
    return _mysqrt(x, left, mid - 1)
  }
  else {
    return _mysqrt(x, mid + 1, right)
  }
}
// @lc code=end

export { mySqrt }
