/*
 * @lc app=leetcode.cn id=94 lang=typescript
 * @lcpr version=30204
 *
 * [94] 二叉树的中序遍历
 */
import type { TreeNode } from 'ts/leetcode/all/structures/tree/models/TreeNode'

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

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []

  _inorderTraversal(root, result)

  return result
}

function _inorderTraversal(root: TreeNode | null, result: number[]): void {
  if (root === null)
    return

  _inorderTraversal(root.left, result)
  result.push(root.val)
  _inorderTraversal(root.right, result)
}
// @lc code=end

/*
// @lcpr case=start
// [1,null,2,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
export { inorderTraversal }
