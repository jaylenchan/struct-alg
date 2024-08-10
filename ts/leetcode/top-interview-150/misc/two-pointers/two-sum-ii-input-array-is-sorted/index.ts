/*
 * @lc app=leetcode.cn id=167 lang=typescript
 * @lcpr version=30204
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  // 跟3-sum的while处理部分一样的思路
  // 比3-sum少了需要判断left或者right重复的过程
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right]
    if (sum === target) {
      return [left + 1, right + 1]
    }
    else if (sum > target) {
      right--
    }
    else {
      left++
    }
  }

  return []
};
// @lc code=end

/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [2,3,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [-1,0]\n-1\n
// @lcpr case=end

 */

export const two_sum_ii_input_array_is_sorted = { twoSum }
