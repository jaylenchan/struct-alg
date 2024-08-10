/*
 * @lc app=leetcode.cn id=101 lang=typescript
 * @lcpr version=30204
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null)
    return true
  if (root.left === null && root.right === null)
    return true

  return traverse(root, root)
}

function traverse(t1: TreeNode | null, t2: TreeNode | null): boolean {
  if (t1 === null && t2 === null)
    return true
  if (t1 === null || t2 === null)
    return false
  if (t1.val !== t2.val)
    return false

  return t1.val === t2.val && traverse(t1.left, t2.right) && traverse(t1.right, t2.left)
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,2,3,4,4,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,null,3,null,3]\n
// @lcpr case=end

 */
export { isSymmetric }
