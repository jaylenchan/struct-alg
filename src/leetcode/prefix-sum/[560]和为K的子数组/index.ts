/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
  const prefixSum = createPrefixSum(nums)
  const size = nums.length

  let ans = 0

  for (let start = 0; start < size; start++) {
    for (let end = start; end < size; end++) {
      const sum = prefixSum[end + 1] - prefixSum[start]
      if (sum == k) {
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
    if (i == 0) {
      prefixSum[i] = 0
    } else {
      prefixSum[i] = prefixSum[i - 1] + nums[i - 1]
    }
  }

  return prefixSum
}

/**
 * 思路：
 * 1. 利用前缀和技巧，首先定义前缀和数组备用（若要求一个数组的区间[start, end]的和，只需要求prefixSum[end+1] - prefixSum[start]）
 * 2. 枚举连续子数组的起点start，然后接着枚举连续子数组的终点end,因为数组可能为1个元素，所以从end = start开始枚举终点
 * 3. 枚举完终点后，在每个[start, end]左闭右闭区间，利用前缀和技巧计算出区间和
 * 4. 查看每个区间和是否等于k，是的话ans+1，遍历完最后返回ans
 *
 */
// @lc code=end

export default subarraySum
