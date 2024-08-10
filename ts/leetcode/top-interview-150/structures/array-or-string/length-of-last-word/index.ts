/*
 * @lc app=leetcode.cn id=58 lang=typescript
 * @lcpr version=30204
 *
 * [58] 最后一个单词的长度
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function lengthOfLastWord(s: string): number {
  let loc = s.length - 1;
  let len = 0;

  // 从后往前看，注意越界情况loc一定要大于等于0
  // 先过滤掉末尾的空格，找到其实计算的位置loc
  while (s[loc] === " " && loc >= 0) {
    loc--
  }

  // 计算最后一个单词的长度，如果遇到空格就停止
  while (s[loc] !== " " && loc >= 0) {
    loc--
    len++
  }

  return len;
};
// @lc code=end

/*
// @lcpr case=start
// "Hello World"\n
// @lcpr case=end

// @lcpr case=start
// "   fly me   to   the moon  "\n
// @lcpr case=end

// @lcpr case=start
// "luffy is still joyboy"\n
// @lcpr case=end

 */

export const length_of_last_word = { lengthOfLastWord }
