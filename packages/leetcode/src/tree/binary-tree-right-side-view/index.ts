/*
 * @lc app=leetcode.cn id=199 lang=typescript
 * @lcpr version=30204
 *
 * [199] 二叉树的右视图
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
function rightSideView(root: TreeNode | null): number[] {
  if (root === null)
    return []

  const queue: TreeNode[] = []
  const result: number[] = []

  queue.push(root)

  while (queue.length > 0) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!
      if (i === size - 1) {
        result.push(node.val)
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }

  return result
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,null,5,null,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
export { rightSideView }
