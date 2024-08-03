/*
 * @lc app=leetcode.cn id=14 lang=typescript
 * @lcpr version=30204
 *
 * [14] 最长公共前缀
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  const baseStr = strs[0] // 随便找一个字符串作为基准，这里拿第一个
  let loc = 0; // 从第一个字符串的位置0开始
  let commonPreifx = ""

  while (loc !== baseStr.length) {
    let i = 1;
    for (; i < strs.length; i++) {
      const str = strs[i]

      if (str[loc] !== baseStr[loc]) {
        break;
      }
    }

    // 如果能顺利遍历完成，说明了当前位置的字符是公共前缀
    // 否则i位置一定是小于strs.length，即中途退出了，说明当前位置的字符不是公共前缀
    // 在这种情况下，我们结算commonPreifx
    if (i === strs.length) {
      commonPreifx += baseStr[loc]
      loc++
    }
    else {
      // 否则直接退出，意思是当前位置的字符不是公共前缀了
      break;
    }
  }

  return commonPreifx;
};
// @lc code=end

/*
// @lcpr case=start
// ["flower","flow","flight"]\n
// @lcpr case=end

// @lcpr case=start
// ["dog","racecar","car"]\n
// @lcpr case=end

 */

export const longest_common_prefix = { longestCommonPrefix }
