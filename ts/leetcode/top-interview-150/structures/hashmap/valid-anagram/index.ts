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
  // 判断异位词，那么单词数量一定相同，否则直接返回false
  // 我们将单词s的char和它出现的次数用map存储起来
  // 然后我们遍历单词t，不断消耗map中的char次数，当char次数为0，从map中删除
  // 最后如果t真的是s的异位词，那么map的大小一定是0

  if (s.length !== t.length)
    return false

  const map = new Map<string, number>()

  for (let i = 0; i < s.length; i++) {
    const count = map.get(s[i])

    if (!count) {
      map.set(s[i], 1)
    }
    else {
      map.set(s[i], count + 1)
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (!map.has(t[j])) {
      return false
    }

    const count = map.get(t[j])!

    if (count - 1 === 0) {
      map.delete(t[j])
    }
    else {
      map.set(t[j], count - 1)
    }
  }

  return map.size === 0
};
// @lc code=end

/*
// @lcpr case=start
// "anagram"\n"nagaram"\n
// @lcpr case=end

// @lcpr case=start
// "rat"\n"car"\n
// @lcpr case=end

 */

export const valid_anagram = { isAnagram }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [242] 有效的字母异位词
     */
    valid_anagram: {
      isAnagram: (s: string, t: string) => boolean
    }
  }
}
