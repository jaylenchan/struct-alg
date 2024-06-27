/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
 */

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
import type { TreeNode } from '../models/TreeNode'

function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []

  _postorderTraversal(root, result)

  return result
}

function _postorderTraversal(root: TreeNode | null, result: number[]): void {
  if (root === null)
    return

  _postorderTraversal(root.left, result)
  _postorderTraversal(root.right, result)
  result.push(root.val)
}
// @lc code=end

export { postorderTraversal }
