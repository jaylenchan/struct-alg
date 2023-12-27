/*
 * @lc app=leetcode.cn id=1588 lang=typescript
 *
 * [1588] 所有奇数长度子数组的和
 */

// @lc code=start
function sumOddLengthSubarrays(arr: number[]): number {
  const prefixSum = createPrefixSum(arr)
  const size = arr.length
  let sum = 0
  // 枚举奇数数组的start
  for (let start = 0; start < size; start++) {
    // 枚举从start开始的奇数数组的可能长度
    for (let len = 1; start + len <= size; len += 2) {
      const end = start + len - 1 // 算出奇数数组的end
      sum += prefixSum[end + 1] - prefixSum[start] // 不断累加[start, end]区间的奇数数组,利用前缀和省去计算区间和的过程
    }
  }
  return sum
}

function createPrefixSum(arr: number[]): number[] {
  const prefixSum: number[] = []

  const size = arr.length

  for (let i = 0; i <= size; i++) {
    if (i == 0) {
      prefixSum[i] = 0
    } else {
      prefixSum[i] = prefixSum[i - 1] + arr[i - 1]
    }
  }

  return prefixSum
}

// @lc code=end

export { sumOddLengthSubarrays }
