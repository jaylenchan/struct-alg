/*
 * @lc app=leetcode.cn id=145 lang=typescript
 * @lcpr version=30204
 *
 * [145] 二叉树的后序遍历
 */
import type { TreeNode } from 'ts/leetcode/all/tree/models/TreeNode'

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
export { postorderTraversal }
