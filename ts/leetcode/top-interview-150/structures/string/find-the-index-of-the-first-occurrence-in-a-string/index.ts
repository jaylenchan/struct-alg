/*
 * @lc app=leetcode.cn id=28 lang=typescript
 * @lcpr version=30204
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function strStr(haystack: string, needle: string): number {
  if (haystack.length < needle.length) {
    return -1;
  }

  let start = 0;

  // 依次遍历主字符串的每个字符作为起点开始往后搜寻
  while (start < haystack.length) {
    let j = start;
    let i = 0

    // 从0开始依次遍历副字符串的每个字符
    // 如果字符有一个跟主字符串的对应位置字符不一样，直接break；
    // 否则如果能够顺利遍历完副字符串，尝试判断i位置来确定副字符串走完了
    // 走完了证明匹配成功，直接返回当前的start
    while (i < needle.length) {
      if (needle[i] !== haystack[j]) {
        break;
      }

      j++;
      i++
    }

    if (i === needle.length)
      return start;

    start++
  }

  return -1;
};
// @lc code=end

/*
// @lcpr case=start
// "sadbutsad"\n"sad"\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n"leeto"\n
// @lcpr case=end

 */

export const find_the_index_of_the_first_occurrence_in_a_string = { strStr }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [28] 找出字符串中第一个匹配项的下标
     */
    find_the_index_of_the_first_occurrence_in_a_string: {
      strStr: (haystack: string, needle: string) => number
    }
  }
}
