/*
 * @lc app=leetcode.cn id=179 lang=typescript
 *
 * [179] 最大数
 */

// @lc code=start
function largestNumber(nums: number[]): string {
  nums.sort((a, b) => {
    const newA = String(a)
    const newB = String(b)

    const A = newB + newA
    const B = newA + newB

    return Number(A) - Number(B)
  })

  let ans = ''
  let i = 0
  for (; i < nums.length; i++) {
    if (nums[i] != 0) {
      break
    }
  }

  for (let j = i; j < nums.length; j++) {
    ans += nums[j]
  }

  return ans ? ans : '0'
}

// @lc code=end

export default largestNumber

/**
 * 思路：自定义比较规则
 * 规则是 Number(字符串b + 字符串a) - Number(字符串a + 字符串b)
 */
