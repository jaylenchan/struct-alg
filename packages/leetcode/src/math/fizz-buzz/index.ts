/*
 * @lc app=leetcode.cn id=412 lang=typescript
 * @lcpr version=30204
 *
 * [412] Fizz Buzz
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function fizzBuzz(n: number): string[] {
  const nums = []
  for (let i = 0; i <= n; i++) {
    nums[i] = i
  }

  const result: string[] = []

  for (let j = 1; j <= n; j++) {
    if (j % 3 === 0 && j % 5 === 0) {
      result[j - 1] = 'FizzBuzz'
    }
    else if (j % 3 === 0) {
      result[j - 1] = 'Fizz'
    }
    else if (j % 5 === 0) {
      result[j - 1] = 'Buzz'
    }
    else {
      result[j - 1] = `${j}`
    }
  }

  return result
}
// @lc code=end

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 5\n
// @lcpr case=end

// @lcpr case=start
// 15\n
// @lcpr case=end

 */
export { fizzBuzz }
