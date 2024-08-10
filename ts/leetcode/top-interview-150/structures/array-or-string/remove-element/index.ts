/*
 * @lc app=leetcode.cn id=27 lang=typescript
 * @lcpr version=30204
 *
 * [27] 移除元素
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function removeElement(nums: number[], val: number): number {
  let loc = 0;
  // 设计一个loc指针，表示下一个数值不为val的位置，同时表示新数组的下一个存放位置
  // 从头遍历nums，如果nums[i]不等于val，说明符合条件，放到新数组的下一个存放位置loc，放完后更新loc
  // 最后返回loc就是不重复的元素的数量
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[loc++] = nums[i]
    }
  }

  return loc
};
// @lc code=end

/*
// @lcpr case=start
// [3,2,2,3]\n3\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2,2,3,0,4,2]\n2\n
// @lcpr case=end

 */

export const remove_element = { removeElement }
