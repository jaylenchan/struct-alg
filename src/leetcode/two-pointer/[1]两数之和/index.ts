/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
class Num {

  constructor(public index: number, public val: number) {}

}
function twoSum(sums: number[], target: number): number[] {
  if (sums.length <= 1) return []

  const ans: number[][] = []

  const nums = sums.map((num, index) => new Num(index, num))
  nums.sort((a, b) => a.val - b.val)

  let L = 0
  let R = sums.length - 1

  while (L < R) {
    const numL = nums[L].val
    const numR = nums[R].val
    if (numL + numR == target) {
      ans.push([nums[L].index, nums[R].index])
      L++
      R--
      while (nums[L] && nums[L].val == numL) {
        L++
      }
      while (nums[R] && nums[R].val == numR) {
        R--
      }
    } else if (numL + numR < target) {
      L++
    } else {
      R--
    }
  }

  return ans[0]
}
// @lc code=end

/**
 * #思路#
 * 本题用这种解法是为了一套方法打通整个sum之和问题（只不过这道题无序，排序后原来index就没了，所以才用Num去包装）
 * 该题模式是：二元组的累加和 = k 的问题。
 * 1. 先对数组进行排序,让整个数组是升序排列状态
 * 2. 使用两个指针，L指针和R指针：L指针往右边移动，R指针往左边移动。
 * 3. 每次我们判断nums[L]+nums[R]与k之间的关系：（//! 记住关键前提：整个数组此时有序，左边一定比右边的小）
 *    - nums[L] + nums[R] < k ： 因为此时两数相加小了，所以我们让小的所在指针往右移，L++右移
 *    - nums[L] + nums[R] > k ： 因为此时两数相加大了，所以我们让大的所在指针往左移，R--左移
 *    - nums[L] + nums[R] = k ： 说明符合答案，收集下符合要求的结果[L,R]，L++，R--（
 *      去重：如果移动后，发现nums[L],nums[R]还是等于k，我们需要判断这两个值跟上一个是否一样，一样就跳过）
 * 4. 重复过程3，当L和R撞上的时候，整个过程结束
 */

export default twoSum
