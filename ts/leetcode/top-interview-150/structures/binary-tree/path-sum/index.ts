/*
 * @lc app=leetcode.cn id=112 lang=typescript
 * @lcpr version=30204
 *
 * [112] 路径总和
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root)
    return false;

  return backtracking(root, targetSum);
};

function backtracking(root: TreeNode | null, target: number): boolean {
  if (!root)
    return false;

  if (!root.left && !root.right) {
    if (target - root.val === 0)
      return true;

    return false;
  }

  return backtracking(root.left, target - root.val) || backtracking(root.right, target - root.val);
}
// @lc code=end

/*
// @lcpr case=start
// [5,4,8,11,null,13,4,7,2,null,null,null,1]\n22\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n5\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */

export const path_sum = { hasPathSum }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [112] 路径总和
     */
    path_sum: {
      hasPathSum: (root: TreeNode | null, targetSum: number) => boolean
    }
  }
}
