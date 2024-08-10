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
  const tempArr = []
  let i = 0;
  let j = 0;
  let k = 0;
  // 为数组nums1设计指针i，为数组nums2设计指针j
  // 为tempArr新数组设计指针k

  // 我们让i和j同时启动，从nums1和nums2的左边开始往右走
  // 然后当i和j都可以继续往右走的条件下，我们不断操作：
  // 逻辑是：找到nums1和nums2当前i和j所在位置的数字做比较，小的赋值给tempArr的k位置
  // 然后我们判断两个中最小的那个，谁小谁赋值给tempArr的k位置，完事后指针i或者指针j往右走一步
  // 其实上面的逻辑就是，谁小谁给tempArr，谁的指针往右走，当然以上前提就是指针都不越界的情况下，因为越界就没有比较了
  while (m > i && n > j) {
    const min = Math.min(nums1[i], nums2[j])
    if (min === nums1[i]) {
      tempArr[k++] = nums1[i++]
    }
    if (min === nums2[j]) {
      tempArr[k++] = nums2[j++]
    }
  }

  // 由于指针走动的过程，可能i和j同时走完，那么不会进行下面操作。但是可能的情况是i和j有一个提前走完了，我们需要判断谁先走完
  // 没走完的那个指针，我们继续往右走，同时不断赋值当前位置给tempArr补充进去
  while (m > i) {
    tempArr[k++] = nums1[i++]
  }

  while (n > j) {
    tempArr[k++] = nums2[j++]
  }

  // 最后我们将对应元素拷贝回num1对应位置结束
  tempArr.forEach((e, i) => nums1[i] = e)
};
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

export const merge_sorted_array = { merge }
