/*
 * @lc app=leetcode.cn id=238 lang=typescript
 * @lcpr version=30204
 *
 * [238] 除自身以外数组的乘积
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  /**
   * 题目意思
   * 给你一个整数的数组，将数组中的每个位置的元素重新计算，计算的规则就是：将除了当前元素之外的剩下的数组的元素全部相乘，然后作为当前位置的新元素
   * 比如原来的数组是[1,2,3,4]，那么新数组的每个位置的元素的计算方式是：
   *    0位置，将剩下的（1位置、2位置、3位置）的元素值相乘，然后放回0位置，也就是2*3*4 = 24
   *    1位置，将剩下的（0位置、2位置、3位置）的元素值相乘，然后放回1位置，也就是1*3*4 = 12
   *    2位置，将剩下的（0位置、1位置、3位置）的元素值相乘，然后放回1位置，也就是1*2*4 = 8
   *    3位置，将剩下的（0位置、1位置、2位置）的元素值相乘，然后放回1位置，也就是1*2*3 = 6
   */

  /**
   * 计算除去自身之外的剩下数字的乘积，我们拆成两部分：
   * leftRes[i] 表示位置i左边元素的乘积，比较特殊的leftRes[0]是1，因为0位置左边没元素了，乘积最小设置为1
   * rightRes[i] 表示位置i右边元素的乘积，比较特殊的是rightRes[nums.length-1]是1，因为位置nums.length-1右边没元素了，乘积最小设置为1
   */

  const leftRes: number[] = [] // 每个位置i左边元素的乘积 前缀积
  const rightRes: number[] = [] // 每个元素i右边元素的乘积 后缀积

  let prefixLeft = 1;
  for (let i = 0; i < nums.length; i++) {
    leftRes[i] = prefixLeft;

    // 计算下一个位置的左边元素的乘积 = leftRes[i-1] * nums[i]
    prefixLeft *= nums[i]
  }

  let suffixRight = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    rightRes[j] = suffixRight

    // 计算下一个位置的右边元素的乘积 = nums[j] * rightRes[j+1]
    suffixRight *= nums[j]
  }

  return nums.map((num, i) => leftRes[i] * rightRes[i])
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [-1,1,0,-3,3]\n
// @lcpr case=end

 */
export const product_of_array_except_self = { productExceptSelf }
