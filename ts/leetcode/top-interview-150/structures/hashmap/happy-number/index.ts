/*
 * @lc app=leetcode.cn id=202 lang=typescript
 * @lcpr version=30204
 *
 * [202] 快乐数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function isHappy(n: number): boolean {
  if (n === 1)
    return true;

  /**
   * 题目说了要么最终到达1，要么最终有循环，所以我们可以用set来存储每次计算的结果
   * 只要n不是1，同时不在set中存在。我们就继续计算，尝试将第一个循环的结果计算出来，每次计算的结果都存储在set中，如果set中有重复的结果，那么就是有循环
   */

  const set = new Set<number>()

  while (n !== 1 && !set.has(n)) {
    set.add(n)

    n = next(n)

    if (set.has(n))
      return false;
  }

  return true
};

// 求n各位数的平方和
function next(n: number): number {
  let sum = 0;

  while (n > 0) {
    // 通过%将n中的个位数取出来，比如109将9取出来算
    const digit = n % 10;
    // 计算平方
    sum += digit * digit;

    // 通过/将n中的个位数分离，比如109踢掉9剩下10
    n = Math.floor(n / 10)
  }

  return sum;
}
// @lc code=end

/*
// @lcpr case=start
// 19\n
// @lcpr case=end

// @lcpr case=start
// 2\n
// @lcpr case=end

 */

export const happy_number = { isHappy }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [202] 快乐数
     */
    happy_number: {
      isHappy: (n: number) => boolean
    }
  }
}
