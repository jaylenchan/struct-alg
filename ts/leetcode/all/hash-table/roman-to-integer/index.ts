/*
 * @lc app=leetcode.cn id=13 lang=typescript
 * @lcpr version=30204
 *
 * [13] 罗马数字转整数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function romanToInt(s: string): number {
  const numMap = new Map<string, number>()

  const nums: [string, number][] = [
    ['I', 1],
    ['IV', 4],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
    ['IX', 9],
    ['XL', 40],
    ['XC', 90],
    ['CD', 400],
    ['CM', 900],
  ]

  for (let i = 0; i < nums.length; i++) {
    const [roman, int] = nums[i]
    numMap.set(roman, int)
  }

  let j = 0
  let res = 0
  while (j < s.length) {
    if (j + 1 < s.length && numMap.get(s[j + 1])! > numMap.get(s[j])!) {
      res += numMap.get(`${s[j]}${s[j + 1]}`)!
      j += 2
    }
    else {
      res += numMap.get(`${s[j]}`)!
      j += 1
    }
  }

  return res
}

// @lc code=end

/*
// @lcpr case=start
// "III"\n
// @lcpr case=end

// @lcpr case=start
// "IV"\n
// @lcpr case=end

// @lcpr case=start
// "IX"\n
// @lcpr case=end

// @lcpr case=start
// "LVIII"\n
// @lcpr case=end

// @lcpr case=start
// "MCMXCIV"\n
// @lcpr case=end

 */
export { romanToInt }
