/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  const set = new Set<number>()
  let sum = getSum(n)

  while (sum !== 1) {
    if (!set.has(sum)) {
      set.add(sum)
      sum = getSum(sum)
    }
    else {
      return false
    }
  }
  return true
}

/**
 * 求n每个位子数的平方和
 * 算法步骤：
 * 1. 当n大于0的时候，不断对当前n mod 10，这样子可以拿到最右边的数是多少，然后sum+=这个数的平方
 * 2. 将n直接除以10，让刚刚最右边的数往左边挪动了，于是n下次再被10 mod，就是第二位的数，再次sum+=第二位数的平方
 * 3. 直到n不再大于0，返回sum
 * 举例： 82 % 10 = 2 , sum+=pow(2,2),
 *       n = 82 /10 = 8
 *       8 % 10 = 8 , sum+=pow(8,2)
 *       n = 8 / 10 = 0 退出循环
 */
function getSum(n: number): number {
  let sum = 0
  while (n > 0) {
    sum += (n % 10) ** 2
    n = Math.floor(n / 10)
  }
  return sum
}
// @lc code=end

export { isHappy }
