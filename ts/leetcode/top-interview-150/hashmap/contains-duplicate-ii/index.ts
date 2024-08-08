/*
 * @lc app=leetcode.cn id=219 lang=typescript
 * @lcpr version=30204
 *
 * [219] 存在重复元素 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  /**
   * 题目意思
   * 找两个值相同的元素，要求他们下标差的绝对值小于等于k
   */

  /**
   * 我们用map来记录每一个元素和其第一次存在的位置
   * 然后我们从头开始一个个看数组中的元素：
   *    如果这个元素的下标和我们在map中记录的位置不一致，说明元素重复了。此时我们按照题目要求计算下标差的绝对值然后判断是否小于等于k。
   *   如果小于等于k，那么就返回true
   *   否则，为了防止还有新的重复元素，我们更新map中这个元素的位置，因为只有最近的两个重复元素才有可能计算坐标差值小于等于k，如果连最近都做不到，那么更远的就更不可能了。
   *  所以我们不需要保留之前的位置，只需要保留最近的位置即可
   */
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i)
    }
  }

  for (let j = 0; j < nums.length; j++) {
    const loc = map.get(nums[j])!

    if (loc !== j && Math.abs(loc - j) <= k) {
      return true;
    }

    map.set(nums[j], j);
  }

  return false;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,0,1,1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1,2,3]\n2\n
// @lcpr case=end

 */

export const contains_duplicate_ii = { containsNearbyDuplicate }
