/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
 */

import type { TreeNode } from '../models/TreeNode'

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

function sumNumbers(root: TreeNode | null): number {
  if (root == null) return 0
  return pathSum(root, 0)
}

/* 返回以node为根节点的树到叶子节点的所有路径转换成数字后的总和 */
function pathSum(node: TreeNode, preSum: number): number {
  // 终止节点就是已经到叶子节点了
  if (!node.left && !node.right) {
    return preSum * 10 + node.val
  }

  preSum = preSum * 10 + node.val
  let sum = 0
  if (node.left) {
    sum += pathSum(node.left, preSum)
  }
  if (node.right) {
    sum += pathSum(node.right, preSum)
  }

  return sum
}

// @lc code=end

export { sumNumbers }
