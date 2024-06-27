/*
 * @lc app=leetcode.cn id=260 lang=typescript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
function singleNumber(nums: number[]): number[] {
  if (nums.length === 0)
    return []
  if (nums.length === 2)
    return nums
  let eor = 0

  // 1. 先遍历一次，将所有数进行异或，结果一定是两个奇数次的数进行异或a^b（其他的因为是偶数次，异或结果是0）
  for (let i = 0; i < nums.length; i++) {
    eor ^= nums[i]
  }

  // eor = a ^ b
  // eor !== 0 ，那么必然有位置上是1，我们随便找，这里找最右侧的1来用
  const rightOne = eor & (~eor + 1) // 提取eor最右侧的1

  let onlyOne = 0 // eor'

  // 6. 再利用一个变量，只去异或跟b一样位置是1（假设）的阵营，不去碰这个位置是0的另个阵营的那堆数。异或后的结果就提取出了b
  for (let i = 0; i < nums.length; i++) {
    // 只去异或跟b一样位置是1（假设）的阵营
    // nums[i] 与 rightOne 不等于0，说明nums[i]的对应位置有跟rightOne那个唯一有1的位置一样是1，要不然一定是0，因为rightOne（比如00001000）,谁来与的结果肯定是除了1那个位置有其他可能性，其他全是与成0
    if ((nums[i] & rightOne) !== 0) {
      onlyOne ^= nums[i]
    }
  }

  return [onlyOne, eor ^ onlyOne]
}

// @lc code=end

export { singleNumber }
