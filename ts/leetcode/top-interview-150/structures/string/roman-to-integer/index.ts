/*
 * @lc app=leetcode.cn id=13 lang=typescript
 * @lcpr version=30204
 *
 * [13] 罗马数字转整数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function romanToInt(s: string): number {
  // 发现I，进一步校验右边有没有V或者X
  // 发现X，进一步校验右边有没有L或者C
  // 发现C，进一步校验右边有没有D或者M
  // 在罗马数字中，最多只有两位可能的特殊情况相连接，具体来说，罗马数字的减法规则允许以下组合：
  // IV 表示 4（5 - 1）
  // IX 表示 9（10 - 1）
  // XL 表示 40（50 - 10）
  // XC 表示 90（100 - 10）
  // CD 表示 400（500 - 100）
  // CM 表示 900（1000 - 100）
  // 所以不必校验IXC这样的情况，不合法

  // 字典map记录相关规则的数
  // helper辅助数组记录翻译后的数
  // 执行逻辑：先翻译后累加，具体地，遍历字符串，不断往辅助数组填充翻译后的数，最后求和

  const map = new Map<string, number>()

  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);
  map.set("IV", 4);
  map.set("IX", 9);
  map.set("XL", 40);
  map.set("XC", 90);
  map.set("CD", 400);
  map.set("CM", 900);

  let loc = 0;
  let i = 0;
  const helper: number[] = []

  while (loc < s.length) {
    // 如果s[loc]不是I、X、C直接翻译放到helper的相应位置，然后更新loc
    if (s[loc] !== "I" && s[loc] !== "X" && s[loc] !== "C") {
      helper[i++] = map.get(s[loc++])!
    }
    else {
      switch (s[loc]) {
        case "I": {
          if (s[loc + 1] !== "V" && s[loc + 1] !== "X") {
            helper[i++] = map.get(s[loc++])!;
            break;
          }

          if (s[loc + 1] === "V") {
            helper[i++] = map.get("IV")!;
            loc += 2;
            break;
          }

          if (s[loc + 1] === "X") {
            helper[i++] = map.get("IX")!;
            loc += 2;
          }
          break;
        }
        case "X": {
          if (s[loc + 1] !== "L" && s[loc + 1] !== "C") {
            helper[i++] = map.get(s[loc++])!;
            break;
          }

          if (s[loc + 1] === "L") {
            helper[i++] = map.get("XL")!;
            loc += 2;
            break;
          }

          if (s[loc + 1] === "C") {
            helper[i++] = map.get("XC")!;
            loc += 2;
          }
          break;
        }
        case "C": {
          if (s[loc + 1] !== "D" && s[loc + 1] !== "M") {
            helper[i++] = map.get(s[loc++])!;
            break;
          }

          if (s[loc + 1] === "D") {
            helper[i++] = map.get("CD")!;
            loc += 2;
            break;
          }

          if (s[loc + 1] === "M") {
            helper[i++] = map.get("CM")!;
            loc += 2;
          }
          break;
        }
      }
    }
  }

  return helper.reduce((res, cur) => res + cur, 0);
};
// @lc code=end

/*
// @lcpr case=start
// "III"\n
// @lcpr case=end

// @lcpr case=start
// "IV"\n
// @lcpr case=end

// @lcpr case=start
// "IX"\n
// @lcpr case=end

// @lcpr case=start
// "LVIII"\n
// @lcpr case=end

// @lcpr case=start
// "MCMXCIV"\n
// @lcpr case=end

 */
export const roman_to_integer = { romanToInt }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [13] 罗马数字转整数
     */
    roman_to_integer: {
      romanToInt: (s: string) => number
    }
  }
}
