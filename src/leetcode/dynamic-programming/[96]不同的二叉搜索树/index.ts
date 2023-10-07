/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
// function numTrees(n: number): number {
//   if (n == 0) return 1;

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

/**
 * 思路：从暴力递归到动态规划
 * 实际上二叉搜索树的中序遍历就是从小到大的，我们直接将输入看成是一个二叉搜索树的中序遍历表示。
 * 那么这个数组每个节点都可能是一颗二叉搜索树的头节点，而有了头结点后，从左右两边看，又可以构造出这个二叉搜索树的左右子树
 * 每次构建出一颗二叉搜索树的可能是左右两个子树可能数相乘，遍历数组将每个可能的头节点创建出来的二叉搜索树的可能结果再累计就是最终总和
 */
// @lc code=end

export default numTrees
