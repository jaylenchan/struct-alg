/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
 */

import type TreeNode from '../TreeNode'

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

function diameterOfBinaryTree(root: TreeNode | null): number {
  return process(root).maxDistance
}

type Info = {
  maxDistance: number
  height: number
}
function process(root: TreeNode | null): Info {
  if (root == null)
    return {
      maxDistance: 0,
      height: 0,
    }

  const leftInfo = process(root.left)
  const rightInfo = process(root.right)

  return {
    maxDistance: Math.max(Math.max(leftInfo.maxDistance, rightInfo.maxDistance), leftInfo.height + rightInfo.height),
    height: Math.max(leftInfo.height, rightInfo.height) + 1,
  }
}
// @lc code=end

export { diameterOfBinaryTree }
