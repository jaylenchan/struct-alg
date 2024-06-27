/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
// function numTrees(n: number): number {
//   if (n === 0) return 1;

//   let count = 0;

//   for (let i = 1; i <= n; i++) {
//     let leftCount = numTrees(i - 1);
//     let rightCount = numTrees(n - i);

//     count += leftCount * rightCount;
//   }

//   return count;
// }

function numTrees(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0)

  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i + 1; j++) {
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }

  return dp[n]
}

// @lc code=end

export { numTrees }
