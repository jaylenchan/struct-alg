/*
 * @lc app=leetcode.cn id=222 lang=typescript
 * @lcpr version=30204
 *
 * [222] 完全二叉树的节点个数
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

/*
// @lcpr case=start
// [1,2,3,4,5,6]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
export { countNodes }
