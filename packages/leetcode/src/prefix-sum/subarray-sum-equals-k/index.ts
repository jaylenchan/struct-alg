/*
 * @lc app=leetcode.cn id=560 lang=typescript
 * @lcpr version=30204
 *
 * [560] 和为 K 的子数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function subarraySum(nums: number[], k: number): number {
  const prefixSum = createPrefixSum(nums)
  const size = nums.length

  let ans = 0

  for (let start = 0; start < size; start++) {
    for (let end = start; end < size; end++) {
      const sum = prefixSum[end + 1] - prefixSum[start]
      if (sum === k) {
        ans += 1
      }
    }
  }

  return ans
}

function createPrefixSum(nums: number[]): number[] {
  const prefixSum: number[] = []

  const size = nums.length

  for (let i = 0; i <= size; i++) {
    if (i === 0) {
      prefixSum[i] = 0
    }
    else {
      prefixSum[i] = prefixSum[i - 1] + nums[i - 1]
    }
  }

  return prefixSum
}
// @lc code=end

/*
// @lcpr case=start
// [1,1,1]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n3\n
// @lcpr case=end

 */
export { subarraySum }
