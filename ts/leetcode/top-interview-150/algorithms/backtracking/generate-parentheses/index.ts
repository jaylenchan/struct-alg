/*
 * @lc app=leetcode.cn id=22 lang=typescript
 * @lcpr version=30204
 *
 * [22] 括号生成
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function generateParenthesis(n: number): string[] {
  const ans: string[] = [];

  backtrack(ans, "", 0, 0, n);

  return ans;
};

function backtrack(ans: string[], str: string, left: number, right: number, n: number): void {
  if (left + right === n * 2) {
    ans.push(str);

    return;
  }

  const brackets = "()"

  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === "(") {
      if (left === n) {
        continue;
      }
      backtrack(ans, str + brackets[i], left + 1, right, n);
    }

    if (brackets[i] === ')') {
      if (left < right + 1) {
        continue;
      }
      backtrack(ans, str + brackets[i], left, right + 1, n);
    }
  }
}
// @lc code=end

/*
  // @lcpr case=start
  // 3\n
  // @lcpr case=end

  // @lcpr case=start
  // 1\n
  // @lcpr case=end

   */

export const generate_parentheses = { generateParenthesis };

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [22] 括号生成
     */
    generate_parentheses: {
      generateParenthesis: (n: number) => string[]
    }
  }
}
