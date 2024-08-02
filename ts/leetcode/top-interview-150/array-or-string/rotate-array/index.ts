/*
 * @lc app=leetcode.cn id=189 lang=typescript
 * @lcpr version=30204
 *
 * [189] 轮转数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  // 分情况考虑：
  // 1. 数组最后一个元素的位置 <= k，那么我们就有可能轮转了回到原位置，因为k是最后一个位置的整数倍，相当于轮转了个寂寞，所以要控制k小于数组长度
  // 3. 数组长度 > k，直接使用正常的轮转规则计算

  // 只有数组的长度大于k的时候，轮转的基本规则才有效
  // 否则我们需要将k控制在小于nums.length
  // 比如[1,2],轮转3，其实就是轮转1，结果是[2,1]
  // 比如[1,2],轮转5，其实就是轮转1，结果是[2,1]
  while (nums.length - 1 < k) {
    k = k - nums.length;
  }

  // 到这里，我们nums的长度一定是大于k的，这个时候运用正常的轮转逻辑才是一定正确的。
  // 我们假设每个元素的位置为i
  // 然后假如最终到达的新位置是 i + k，但是i + k 有可能这个位置超过nums.length - 1，也就是数组的最后一个位置会超过了
  // 如果超过了，我们就从头循环复用，那么复用后的实际位置是 (i + k) - nums.length
  const locs = []

  for (let i = 0; i < nums.length; i++) {
    const loc = (i + k) > nums.length - 1 ? (i + k) - nums.length : (i + k);
    locs[i] = [loc, nums[i]]
  }

  for (let j = 0; j < locs.length; j++) {
    const [loc, num] = locs[j];

    nums[loc] = num;
  }
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5,6,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [-1,-100,3,99]\n2\n
// @lcpr case=end

 */

export { rotate }
