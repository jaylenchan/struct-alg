/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (j + 1 < s.length && numMap.get(s[j + 1])! > numMap.get(s[j])!) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      res += numMap.get(`${s[j]}${s[j + 1]}`)!
      j += 2
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      res += numMap.get(`${s[j]}`)!
      j += 1
    }
  }

  return res
}

romanToInt('LVIII')
// @lc code=end
