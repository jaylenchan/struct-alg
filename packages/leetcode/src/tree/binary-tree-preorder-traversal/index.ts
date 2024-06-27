/*
 * @lc app=leetcode.cn id=144 lang=typescript
 * @lcpr version=30204
 *
 * [144] 二叉树的前序遍历
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

function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []

  _preorderTraversal(root, result)

  return result
}

function _preorderTraversal(root: TreeNode | null, result: number[]): void {
  if (root === null)
    return

  result.push(root.val)
  _preorderTraversal(root.left, result)
  _preorderTraversal(root.right, result)
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

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,2]\n
// @lcpr case=end

 */
export { preorderTraversal }
