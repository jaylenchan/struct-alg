/*
 * @lc app=leetcode.cn id=29 lang=typescript
 *
 * [29] 两数相除
 */

// @lc code=start
function divide(dividend: number, divisor: number): number {
  const INT_MIN = -(2 ** 31)
  const INT_MAX = 2 ** 31 - 1
  // 被除数dividend右边移动31位，除数divisor右边移动31位，判断二者异或结果，如果是0，说明两者同号，那么结果符号应该取正，否则取负
  const sign = ((dividend >> 31) ^ (divisor >> 31)) === 0 ? 1 : -1

  // 特判条件：如果被除数是最小值，同时除数是-1结果会超过INT_MAX溢出，就返回INT_MAX
  if (dividend === INT_MIN && divisor === -1)
    return INT_MAX
  if (divisor === 1)
    return dividend

  // 为了防止INT_MIN转正数溢出溢出，我们将正数转负数
  if (dividend > 0)
    dividend = -dividend
  if (divisor > 0)
    divisor = -divisor

  let ans = 0

  while (dividend <= divisor) {
    let temp = divisor
    let k = 1

    // 不断查看每一轮被除数是否小于等于除数*2
    // 条件成立说明：至少有(temp*2)/3个被除数
    while (dividend <= temp + temp) {
      temp <<= 1
      k <<= 1
    }

    dividend -= temp
    ans += k
  }

  return sign === -1 ? -ans : ans
}

// @lc code=end

export { divide }
