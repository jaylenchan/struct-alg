/*
 * @lc app=leetcode.cn id=387 lang=typescript
 * @lcpr version=30204
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function firstUniqChar(s: string): number {
  const letterMap = new Map<string, number>()
  let result = -1

  for (let i = 0; i < s.length; i++) {
    if (letterMap.has(s[i])) {
      letterMap.set(s[i], letterMap.get(s[i])! + 1)
    }
    else {
      letterMap.set(s[i], 1)
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (letterMap.get(s[i]) === 1) {
      result = i
      break
    }
  }

  return result
}
// @lc code=end

/*
// @lcpr case=start
// "leetcode"\n
// @lcpr case=end

// @lcpr case=start
// "loveleetcode"\n
// @lcpr case=end

// @lcpr case=start
// "aabb"\n
// @lcpr case=end

 */
export { firstUniqChar }
