/*
 * @lc app=leetcode.cn id=104 lang=typescript
 * @lcpr version=30204
 *
 * [104] 二叉树的最大深度
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

function maxDepth(root: TreeNode | null): number {
  /**
   * 递归
   * 如果空节点，最大深度为0
   * 否则当前树的最大深度就是左右子树的最大深度 加上1
   */

  if (!root)
    return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
// @lc code=end

/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,2]\n
// @lcpr case=end

 */

export const maximum_depth_of_binary_tree = { maxDepth }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [104] 二叉树的最大深度
     */
    maximum_depth_of_binary_tree: {
      maxDepth: (root: TreeNode | null) => number
    }
  }
}
