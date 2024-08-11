/*
 * @lc app=leetcode.cn id=383 lang=typescript
 * @lcpr version=30204
 *
 * [383] 赎金信
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  /**
   * 题目的意思
   * 能不能拿magazine变量存储的字符串的字符去组成ransomNote表示的这个字符串
   */

  /**
   * 用一个字典记录字符及其出现次数，然后遍历ransomNote，如果字典中没有这个字符或者次数不够，直接返回false，否则次数减一，
   * 最终能够消耗完字典的对应字符之前遍历完ransomNote，返回true
   */
  const map = new Map<string, number>()

  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i]
    const count = map.get(char)

    if (!count) {
      map.set(char, 1)
    }
    else {
      map.set(char, count + 1)
    }
  }

  for (let j = 0; j < ransomNote.length; j++) {
    const char = ransomNote[j]
    const count = map.get(char)

    if (!count) {
      return false;
    }

    map.set(char, count - 1)
  }

  return true
};
// @lc code=end

/*
// @lcpr case=start
// "a"\n"b"\n
// @lcpr case=end

// @lcpr case=start
// "aa"\n"ab"\n
// @lcpr case=end

// @lcpr case=start
// "aa"\n"aab"\n
// @lcpr case=end

 */

export const ransom_note = { canConstruct }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [383] 赎金信
     */
    ransom_note: {
      canConstruct: (ransomNote: string, magazine: string) => boolean
    }
  }
}
