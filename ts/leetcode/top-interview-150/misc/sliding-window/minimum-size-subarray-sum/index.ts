/*
 * @lc app=leetcode.cn id=209 lang=typescript
 * @lcpr version=30204
 *
 * [209] 长度最小的子数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
// function minSubArrayLen(target: number, nums: number[]): number {
//     let min = Number.MAX_SAFE_INTEGER;
//     let maxSum = 0;
//     let start = 0;

//     while (start < nums.length) {
//         let loc = start;
//         let sum = 0;

//         while (loc < nums.length) {
//             sum += nums[loc]
//             maxSum = Math.max(sum, maxSum);

//             if (sum >= target) {
//                 min = Math.min(min, loc - start + 1);
//                 break;
//             }

//             loc++;
//         }

//         start++;
//     }

//     if (maxSum < target) return 0;

//     return min > 0 ? min : 0;
// };

function minSubArrayLen(target: number, nums: number[]): number {
  /**
   * 上面第一种暴力实现超时了，需要优化方案
   * 找到一定长度的子串之后就不用考虑比它更长的子串了，因此可以用滑动窗口省略掉大部分情况。
   * 其实我们在第一种方案中找到了符合长度的子串，我们也做了break；
   * 但是我们每次循环都从头计算了sum
   *
   * 如果我们固定第一个数A，找到了A、B、C、D符合条件
   * 那么下一个循环，我们从B开始找，又从头计算B、C、D了。为了优化这点，我们用滑动窗口，当A符合条件了，我们移动窗口的左边，让start直接来到B，end还是在D位置。因为题目给的都是正整数，这样一来，我们就需要补数字，于是让end继续往右走。直到符合条件，我们停止查找以B开头的情况了。
   * 尝试让start来到C，我们开始找C符合条件的情况。然后判断它是否要继续补数。
   * 如此往复，直到窗口end走完。
   *
   * 感悟：使用滑动窗口，相当于第一种循环方案跳着走，一下子跳到下一个循环的指定位置去了。
   */

  let start = 0;
  let end = 0;

  let min = Number.MAX_SAFE_INTEGER;
  let sum = nums[end];

  while (end < nums.length) {
    if (sum >= target) {
      min = Math.min(min, end - start + 1);
      sum -= nums[start];
      start++;
      continue;
    }

    end++;
    sum += nums[end];
  }

  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
}

// @lc code=end

/*
// @lcpr case=start
// 7\n[2,3,1,2,4,3]\n
// @lcpr case=end

// @lcpr case=start
// 4\n[1,4,4]\n
// @lcpr case=end

// @lcpr case=start
// 11\n[1,1,1,1,1,1,1,1]\n
// @lcpr case=end

 */

export const minimum_size_subarray_sum = { minSubArrayLen }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [209] 长度最小的子数组
     */
    minimum_size_subarray_sum: {
      minSubArrayLen: (target: number, nums: number[]) => number
    }
  }
}
