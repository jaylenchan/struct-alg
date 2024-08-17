/* eslint-disable prefer-template */
/* eslint-disable no-irregular-whitespace */
/*
 * @lc app=leetcode.cn id=151 lang=typescript
 * @lcpr version=30204
 *
 * [151] 反转字符串中的单词
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function reverseWords(s: string): string {
  /**
   * 题目意思：
   * 将一串英文单词仅用一个空格分隔。不要其余多余的空格。
   * 如果只有一个单词，就不要空格。
   */

  // 设计逻辑把单词一个个取出来，然后重新组装

  /**
   * 设计指针loc表示输入字符串s遍历到什么位置了
   * 从后往前遍历整个输入字符串s
   * 每次循环，设置从loc位置设置新单词的end位置（包括相关的后缀空格）
   */
  let ansStr = ""
  let loc = s.length - 1;

  while (loc !== -1) {
    while (s[loc] === " " && loc >= 0) {
      loc--
    }

    // 当loc为-1时，说明已经遍历完了，不要再继续了
    if (loc === -1) {
      break;
    }

    const end = loc;
    let start = end;

    while (s[start] !== " " && start >= 0) {
      start--
      loc--
    }

    const word = s.slice(start + 1, end + 1);
    ansStr = !ansStr ? word : ansStr + " " + word
  }

  return ansStr
};
// @lc code=end

/*
// @lcpr case=start
// "the sky is blue"\n
// @lcpr case=end

// @lcpr case=start
// "  hello world  "\n
// @lcpr case=end

// @lcpr case=start
// "a good   example"\n
// @lcpr case=end

 */

export const reverse_words_in_a_string = { reverseWords }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [151] 反转字符串中的单词
     */
    reverse_words_in_a_string: {
      reverseWords: (s: string) => string
    }
  }
}
