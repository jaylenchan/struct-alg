/*
 * @lc app=leetcode.cn id=1 lang=typescript
 * @lcpr version=30204
 *
 * [1] 两数之和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>()
  const ans: number[] = []

  // 这个解法的思路就是尝试找差值，如果有nums的元素是差值，最多遍历完最后一次一定能找到，题目说了一定有一个答案
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i] // 获取当前数的差值
    const diffLoc = map.get(diff) // 获取差值的位置

    // 如果差值在map中存在，说明找到了
    if (diffLoc) {
      ans.push(diffLoc, i)
      break;
    }

    // 否则将当前数存入map
    map.set(nums[i], i)
  }

  return ans
};
// @lc code=end

/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */

export const two_sum = { twoSum }
