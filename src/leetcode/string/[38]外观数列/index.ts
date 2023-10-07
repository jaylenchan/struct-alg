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
    if (s[i] == pivot) {
      count++
    } else {
      ans += `${count}${pivot}`
      pivot = s[i]
      count = 1
    }

    if (i + 1 == s.length) {
      ans += `${count}${pivot}`
    }
  }

  if (ans == '') {
    ans += `${count}${pivot}`
  }

  return ans
}

// @lc code=end

export default countAndSay

/**
 * 思路：外观数列其实就是看每一次字符串有几个相同的数，记录的形式就是`次数+数字`
 * 1. 定义一个next函数，用来算出下一次的数字串，next的内容就是遍历给定字符串s，不断按照`次数+数字`的形式记录
 * 2. 通过count记录次数，当不同得时候就替换一下标定字符pivot
 * 3. 主函数直接通过数字遍历，直接从2开始遍历到n
 */
