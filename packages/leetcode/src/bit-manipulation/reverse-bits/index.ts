/*
 * @lc app=leetcode.cn id=190 lang=typescript
 * @lcpr version=30204
 *
 * [190] 颠倒二进制位
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function reverseBits(n: number): number {
  const bits = n.toString(2).padStart(32, '0').split('')
  const left = 0
  const right = bits.length - 1

  _reverseBits(bits, left, right)
  return Number.parseInt(bits.join(''), 2)
}

function _reverseBits(bits: string[], left: number, right: number): void {
  if (left >= right) {
    return;
  }
  [bits[right], bits[left]] = [bits[left], bits[right]]
  _reverseBits(bits, left + 1, right - 1)
}
// @lc code=end

/*
// @lcpr case=start
// 00000010100101000001111010011100\n
// @lcpr case=end

// @lcpr case=start
// 11111111111111111111111111111101\n
// @lcpr case=end

 */
export { reverseBits }
