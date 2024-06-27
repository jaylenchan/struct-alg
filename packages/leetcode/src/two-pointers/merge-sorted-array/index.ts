/*
 * @lc app=leetcode.cn id=88 lang=typescript
 * @lcpr version=30204
 *
 * [88] 合并两个有序数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const len = m + n
  let nums2Len = n

  // 插入排序相似思路
  for (let i = m; i < len; i++) {
    nums1[i] = nums2[nums2Len - 1]
    for (let j = i; j > 0 && nums1[j] < nums1[j - 1]; j--) {
      swap(nums1, j, j - 1)
    }

    if (nums2Len >= 0)
      nums2Len -= 1
  }
}

function swap(nums: number[], i: number, j: number): void {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,0,0,0]\n3\n[2,5,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n[]\n0\n
// @lcpr case=end

// @lcpr case=start
// [0]\n0\n[1]\n1\n
// @lcpr case=end

 */
export { merge }
