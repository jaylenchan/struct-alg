/*
 * @lc app=leetcode.cn id=17 lang=typescript
 * @lcpr version=30204
 *
 * [17] 电话号码的字母组合
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function letterCombinations(digits: string): string[] {
  if (digits.length === 0)
    return [];

  const map = new Map<string, string>();

  map.set("2", "abc");
  map.set("3", "def");
  map.set("4", "ghi");
  map.set("5", "jkl");
  map.set("6", "mno");
  map.set("7", "pqrs");
  map.set("8", "tuv");
  map.set("9", "wxyz");

  const ans: string[] = []

  backtracking(digits, map, ans, "", 0)

  return ans;
};

function backtracking(digits: string, map: Map<string, string>, ans: string[], str: string, start: number): void {
  if (start === digits.length) {
    ans.push(str);

    return;
  }

  const letters = map.get(digits[start])!;

  for (let i = 0; i < letters.length; i++) {
    const char = letters[i];

    backtracking(digits, map, ans, str + char, start + 1);
  }
}
// @lc code=end

/*
// @lcpr case=start
// "23"\n
// @lcpr case=end

// @lcpr case=start
// ""\n
// @lcpr case=end

// @lcpr case=start
// "2"\n
// @lcpr case=end

 */

export const letter_combinations_of_a_phone_number = { letterCombinations };

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [17] 电话号码的字母组合
     */
    letter_combinations_of_a_phone_number: {
      letterCombinations: (digits: string) => string[]
    }
  }
}
