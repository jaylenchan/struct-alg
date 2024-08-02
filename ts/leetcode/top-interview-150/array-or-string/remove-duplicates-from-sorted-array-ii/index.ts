/*
 * @lc app=leetcode.cn id=80 lang=typescript
 * @lcpr version=30204
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function removeDuplicates(nums: number[]): number {
  const maxCount = 2;

  // 如果元素个数小于等于最大允许重复个数，直接返回
  if (nums.length <= maxCount)
    return nums.length;

  // 维护一个窗口，用loc表示窗口的长度，同时用loc表示下一个新的可拷贝元素的位置
  let loc = maxCount;

  for (let i = maxCount; i < nums.length; i++) {
    // 假如当前扫描的元素和所允许重复的第一个元素不一样
    // 说明是有新的元素加入了，为啥？因为题目说了数组有序，也就是说后面不再有跟当前轮元素一样的数字了
    // nums[loc-maxCount] 是当前考虑的元素在新数组中的第一个可能的位置
    // [loc-maxCount]表示上一轮保留的元素，如果是有重复的，那么第一个出现的位置
    if (nums[i] !== nums[loc - maxCount]) {
      // 那么将新元素拷贝到loc位置
      nums[loc] = nums[i]
      // 新数组长度加1
      loc++
    }
  }

  return loc // 返回该窗口的长度就是新数组的长度
};
// @lc code=end

/*
// @lcpr case=start
// [1,1,1,2,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,1,2,3,3]\n
// @lcpr case=end

 */

export { removeDuplicates }
