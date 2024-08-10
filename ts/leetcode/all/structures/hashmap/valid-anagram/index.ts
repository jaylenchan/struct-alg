/*
 * @lc app=leetcode.cn id=242 lang=typescript
 * @lcpr version=30204
 *
 * [242] 有效的字母异位词
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length)
    return false

  const letterMap = new Map<string, number>()
  for (let i = 0; i < s.length; i++) {
    const count = letterMap.get(s[i]) ? letterMap.get(s[i])! : 0
    letterMap.set(s[i], count + 1)
  }

  for (let j = 0; j < t.length; j++) {
    let count = letterMap.get(t[j]) ? letterMap.get(t[j])! : 0
    if (count === 0) {
      return false
    }
    letterMap.set(t[j], --count)
  }

  return true
}
// @lc code=end

/*
// @lcpr case=start
// "anagram"\n"nagaram"\n
// @lcpr case=end

// @lcpr case=start
// "rat"\n"car"\n
// @lcpr case=end

 */
export { isAnagram }
