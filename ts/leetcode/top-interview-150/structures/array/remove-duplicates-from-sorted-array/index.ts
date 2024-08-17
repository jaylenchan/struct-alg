/*
 * @lc app=leetcode.cn id=26 lang=typescript
 * @lcpr version=30204
 *
 * [26] 删除有序数组中的重复项
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0 || nums.length === 1)
    return nums.length;

  // 设计指针loc代表新数组中下一个能放的位置，同时代表数组长度
  // 我们假设有一个看不见的数组，它是通过loc指针代表的，那么这个看不见的数组的最后一个位置就是loc-1
  // 由于数组是有序的，所以我们可以遍历nums，然后只需要判断nums[i]和看不见的数组的最后一个位置比较，如果不一样，那么就加入新数组，最后更新loc
  // 至于为什么不怕遍历过程当中可能再次出现前面出现过的数字，是因为有大前提：数组是排序后的，所以如果是最后一个位置一样的，直接大胆跳下一个元素判断，那么
  // 下一次再出现跟nums[loc-1]不同的元素的时候，就可以大胆加入新数组更新loc
  const maxCount = 1
  let loc = maxCount;

  for (let i = maxCount; i < nums.length; i++) {
    if (nums[i] !== nums[loc - maxCount]) {
      nums[loc++] = nums[i]
    }
  }

  return loc
};
// @lc code=end

/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */

export const remove_duplicates_from_sorted_array = { removeDuplicates }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [26] 删除有序数组中的重复项
     */
    remove_duplicates_from_sorted_array: {
      removeDuplicates: (nums: number[]) => number
    }
  }
}
