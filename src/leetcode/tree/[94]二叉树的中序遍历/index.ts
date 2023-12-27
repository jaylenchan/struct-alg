/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start

import type TreeNode from '../TreeNode'

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []

  _inorderTraversal(root, result)

  return result
}

function _inorderTraversal(root: TreeNode | null, result: number[]): void {
  if (root == null) return

  _inorderTraversal(root.left, result)
  result.push(root.val)
  _inorderTraversal(root.right, result)
}
// @lc code=end

export { inorderTraversal }
