/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0
  let min = Infinity

  let L = 0
  let R = 0

  while (R != nums.length) {
    sum += nums[R]

    R++
    while (sum >= target) {
      min = Math.min(min, R - L)
      sum -= nums[L++]
    }
  }

  return min == Infinity ? 0 : min
}
// @lc code=end

/**
 * #思路#
 * 题目要求含有n个正整数的数组中，找到一组连续的数构成子数组，让这个子数组的和大于等于target
 * 模式匹配：滑动窗口
 *
 * 1. 定义sum变量用于存放当前为止所取得的子数组的和；定义min变量用于遍历到当前为止最小的满足条件的子数组的长度
 * 2. 定义滑动窗口的左侧L和右侧R（(注意：R代表的是滑动窗口的最后一个元素的后一个位置)），其中L和R构成的区间是[L,R)，左闭右开的区间，一开始即[L,-1]表示窗口中没有任何元素
 * 3. 开始滑动R,向数组的右侧靠近，每滑动一步，sum加上当前nums[R]，然后R++
 * 4. 当满足题目要求的sum >= target的时候：
 *    - 我们首先更新一下满足条件的最小子数组长度
 *    - 让L往右边移动，缩小窗口长度，不断地尝试让sum缩小直到不满足条件，在这过程当中不断更新缩小sum还是能够满足题目要求的子数组时的最小长度（此时R是停止不动的）
 *
 * 5. 当L不再满足时，R继续移动，直到R跑到数组外侧，停止过程
 */

export default minSubArrayLen
