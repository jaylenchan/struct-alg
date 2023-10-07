/*
 * @lc app=leetcode.cn id=199 lang=typescript
 *
 * [199] 二叉树的右视图
 */

import type TreeNode from '../TreeNode'


export default rightSideView
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
  if (root == null) return []

  const queue: TreeNode[] = []
  const result: number[] = []

  queue.push(root)

  while (queue.length > 0) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const node = queue.shift()!
      if (i == size - 1) {
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
