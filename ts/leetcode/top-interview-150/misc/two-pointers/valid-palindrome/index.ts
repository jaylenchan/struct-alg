/*
 * @lc app=leetcode.cn id=125 lang=typescript
 * @lcpr version=30204
 *
 * [125] 验证回文串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function isPalindrome(s: string): boolean {
  s = preprocess(s);

  if (s.length < 2) {
    return true
  }

  /**
   * 双指针：你说你是回文串，那么左右指针所指的字符一定是相等的
   * 如果不相等，那么就不是回文串
   * 无论字符串是奇数还是偶数，都可以用这种方式来判断，偶数的话最后一次就是left < right ，奇数的话最后一次就是left === right
   */
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true
};

function preprocess(s: string): string {
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  let temp = s.toLowerCase();
  temp = temp.trim();

  const newStr = temp.split("").filter(c => alphabet.includes(c) || nums.includes(c)).join("")

  return newStr
}
// @lc code=end

/*
// @lcpr case=start
// "A man, a plan, a canal: Panama"\n
// @lcpr case=end

// @lcpr case=start
// "race a car"\n
// @lcpr case=end

// @lcpr case=start
// " "\n
// @lcpr case=end

 */

export const valid_palindrome = { isPalindrome }
