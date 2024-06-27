/*
 * @lc app=leetcode.cn id=110 lang=typescript
 * @lcpr version=30204
 *
 * [110] 平衡二叉树
 */
import type { TreeNode } from '../models/TreeNode'

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

function isBalanced(root: TreeNode | null): boolean {
  if (root === null)
    return true
  const leftHeight = height(root.left)
  const rightHeight = height(root.right)

  if (Math.abs(leftHeight - rightHeight) > 1)
    return false

  return isBalanced(root.left) && isBalanced(root.right)
}

function height(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }

  return 1 + Math.max(height(root.left), height(root.right))
}
// @lc code=end

/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,3,3,null,null,4,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
export { isBalanced }
