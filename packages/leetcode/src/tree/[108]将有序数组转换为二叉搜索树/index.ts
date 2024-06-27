/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

import { TreeNode } from '../models/TreeNode'

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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const left = 0
  const right = nums.length - 1

  return _buildBST(nums, left, right)
}

function _buildBST(nums: number[], left: number, right: number): TreeNode | null {
  if (left > right)
    return null
  const mid = left + Math.floor((right - left) >> 1)

  const root = new TreeNode(nums[mid])

  root.left = _buildBST(nums, left, mid - 1)
  root.right = _buildBST(nums, mid + 1, right)

  return root
}
// @lc code=end

export { sortedArrayToBST }
