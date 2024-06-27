/*
 * @lc app=leetcode.cn id=222 lang=typescript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start

import type { TreeNode } from '../models/TreeNode'

function countNodes(root: TreeNode | null): number {
  let result = 0

  function _preorderTraversal(root: TreeNode | null): void {
    if (root === null)
      return

    result += 1
    _preorderTraversal(root.left)
    _preorderTraversal(root.right)
  }

  _preorderTraversal(root)

  return result
}
// @lc code=end

export { countNodes }
