/*
 * @lc app=leetcode.cn id=374 lang=typescript
 * @lcpr version=30204
 *
 * [374] 猜数字大小
 */
// 生成一个在 [1, n] 范围内的随机数作为 pick
const n = 10; // 你可以根据需要更改这个值
const pick = Math.floor(Math.random() * n) + 1;
/**
 * 预定义的 guess API。
 * @param {number} num 你的猜测
 * @return -1 如果 num 大于 pick
 *          1 如果 num 小于 pick
 *          0 如果 num 等于 pick
 */
function guess(num: number): number {
  if (num > pick) {
    return -1;
  }
  else if (num < pick) {
    return 1;
  }
  else {
    return 0;
  }
}
// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
  return guessPick(1, n, guess);
};

function guessPick(start: number, end: number, guess: (num: number) => number): number {
  const mid = start + Math.floor((end - start) / 2)

  switch (guess(mid)) {
    case -1: {
      // 选的大了，往小的一半拿
      return guessPick(start, mid - 1, guess);
    }

    case 1: {
      // 选的小了，往大的一半拿
      return guessPick(mid + 1, end, guess);
    }

    case 0: return mid;
  }

  return -1;
}
// @lc code=end

/*
// @lcpr case=start
// 10\n6\n
// @lcpr case=end

// @lcpr case=start
// 1\n1\n
// @lcpr case=end

// @lcpr case=start
// 2\n1\n
// @lcpr case=end

 */

export const guess_number_higher_or_lower = { guessNumber }

declare module "ts/leetcode/leetcode-75" {
  interface Leetcode75 {
    /**
     * [374] 猜数字大小
     */
    guess_number_higher_or_lower: {
      guessNumber: (n: number) => number
    }
  }
}
