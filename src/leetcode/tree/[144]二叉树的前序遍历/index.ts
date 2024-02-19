/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
import type { TreeNode } from '../models/TreeNode'

function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []

  _preorderTraversal(root, result)

  return result
}

function _preorderTraversal(root: TreeNode | null, result: number[]): void {
  if (root == null) return

  result.push(root.val)
  _preorderTraversal(root.left, result)
  _preorderTraversal(root.right, result)
}
// @lc code=end

export { preorderTraversal }
