/*
 * @lc app=leetcode.cn id=31 lang=typescript
 * @lcpr version=30204
 *
 * [31] 下一个排列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  if (nums.length === 0 || nums.length === 1)
    return

  const end = nums.length - 1
  let [small, j] = [-1, -1]

  // 从右往左找第一对升序数，找到的j将接下来要寻找的small和big分隔在了两头
  for (let index = end; index >= 0; index--) {
    if (nums[index - 1] < nums[index]) {
      small = index - 1
      j = index
      break
    }
  }

  // 设定big从数组尾部开始往前找，只要big>=j，就执行判断操作，判断nums[big]是否大于nums[small]
  // 发现如果是大于条件成立，说明找到了，退循环
  let big = end
  while (big >= j) {
    if (nums[big] > nums[small]) {
      break
    }
    big--
  }

  // 将找到的small和big交换
  ;[nums[small], nums[big]] = [nums[big], nums[small]]

  // j从当前位置开始往数组尾部走，重新排序j-end区间
  // 选择排序（从[j,end]找一个最小的数，跟当前的j交换；下一轮从[j+1,end]找一个最小的数跟当前的j+1交换...）
  while (j <= end) {
    let min = j
    for (let i = j + 1; i <= end; i++) {
      if (nums[i] < nums[min]) {
        min = i
      }
    }

    ;[nums[min], nums[j]] = [nums[j], nums[min]]

    j++
  }
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,5]\n
// @lcpr case=end

 */
export { nextPermutation }
