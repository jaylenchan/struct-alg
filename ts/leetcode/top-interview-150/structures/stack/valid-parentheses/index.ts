/*
 * @lc app=leetcode.cn id=20 lang=typescript
 * @lcpr version=30204
 *
 * [20] 有效的括号
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function isValid(s: string): boolean {
  /**
   * 用一个map记录每一个括号的对应关系，再用set记录下左括号
   * 思路是遇到左括号就入栈，遇到右括号就出栈，
   * 然后判断出栈的左括号是否和右括号匹配：方式就是通过右括号拿回左括号，然后判断是否相等
   * 但是这里有个问题，就是如果遇到右括号，但是栈里面没有左括号了，那么就直接返回false
   * 最后判断栈是否为空，如果为空就是true，否则就是false
   */
  const map = new Map<string, string>();

  map.set(")", "(");
  map.set("}", "{");
  map.set("]", "[");

  const set = new Set<string>()

  set.add("(");
  set.add("{");
  set.add("[")

  const stack: string[] = []

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      stack.push(s[i])
    }
    else {
      const el = stack.pop();
      const char = map.get(s[i])!;

      if (char !== el)
        return false;
    }
  }

  return stack.length === 0
};
// @lc code=end

/*
// @lcpr case=start
// "()"\n
// @lcpr case=end

// @lcpr case=start
// "()[]{}"\n
// @lcpr case=end

// @lcpr case=start
// "(]"\n
// @lcpr case=end

 */

export const valid_parentheses = { isValid }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [20] 有效的括号
     */
    valid_parentheses: {
      isValid: (s: string) => boolean
    }
  }
}
