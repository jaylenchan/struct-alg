/*
 * @lc app=leetcode.cn id=98 lang=typescript
 * @lcpr version=30204
 *
 * [98] 验证二叉搜索树
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
function isValidBST(root: TreeNode | null): boolean {
  const temp: number[] = []

  if (root === null)
    return true
  _inorderTraversal(root, temp)

  if (temp.length === 1)
    return true
  for (let i = 1; i < temp.length; i++) {
    const prev = temp[i - 1]
    const cur = temp[i]

    if (cur <= prev)
      return false
  }

  return true
}

function _inorderTraversal(root: TreeNode | null, temp: number[]): void {
  if (root === null)
    return

  _inorderTraversal(root.left, temp)
  temp.push(root.val)
  _inorderTraversal(root.right, temp)
}
// @lc code=end

/*
// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,4,null,null,3,6]\n
// @lcpr case=end

 */
export { isValidBST }
