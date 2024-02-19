/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start

import type { TreeNode } from '../models/TreeNode'

function isValidBST(root: TreeNode | null): boolean {
  const temp: number[] = []

  if (root == null) return true
  _inorderTraversal(root, temp)

  if (temp.length == 1) return true
  for (let i = 1; i < temp.length; i++) {
    const prev = temp[i - 1]
    const cur = temp[i]

    if (cur <= prev) return false
  }

  return true
}

function _inorderTraversal(root: TreeNode | null, temp: number[]): void {
  if (root == null) return

  _inorderTraversal(root.left, temp)
  temp.push(root.val)
  _inorderTraversal(root.right, temp)
}
// @lc code=end

export { isValidBST }
