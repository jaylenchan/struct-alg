/*
 * @lc app=leetcode.cn id=3 lang=typescript
 * @lcpr version=30204
 *
 * [3] 无重复字符的最长子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();

  let maxLen = 0;
  let start = 0;
  let end = 0;

  while (end < s.length) {
    while (set.has(s[end])) {
      set.delete(s[start]);
      start++;
    }

    set.add(s[end]);
    maxLen = Math.max(maxLen, end - start + 1)
    end++;
  }

  return maxLen;
};
// @lc code=end

/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */

export const longest_substring_without_repeating_characters = { lengthOfLongestSubstring }
