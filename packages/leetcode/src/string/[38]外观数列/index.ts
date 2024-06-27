/*
 * @lc app=leetcode.cn id=38 lang=typescript
 *
 * [38] 外观数列
 */

// @lc code=start
function countAndSay(n: number): string {
  let cur = '1'
  // 2 -> prev -> 11
  // 3 -> prev -> 21
  // 4 -> prev -> 1211
  for (let i = 2; i <= n; i++) {
    cur = next(cur)
  }

  return cur
}

function next(s: string): string {
  let ans = ''
  let pivot = s[0]
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === pivot) {
      count++
    }
    else {
      ans += `${count}${pivot}`
      pivot = s[i]
      count = 1
    }

    if (i + 1 === s.length) {
      ans += `${count}${pivot}`
    }
  }

  if (ans === '') {
    ans += `${count}${pivot}`
  }

  return ans
}

// @lc code=end

export { countAndSay }
