/*
 * @lc app=leetcode.cn id=230 lang=typescript
 * @lcpr version=30204
 *
 * [230] 二叉搜索树中第K小的元素
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

function kthSmallest(root: TreeNode | null, k: number): number {
  const queue: number[] = []

  inOrderTree(root, queue)
  while (k > 1) {
    queue.shift()
    k--
  }

  const target = queue.shift()!

  return target
}

function inOrderTree(root: TreeNode | null, queue: number[]): void {
  if (root === null)
    return

  inOrderTree(root.left, queue)
  queue.push(root.val)
  inOrderTree(root.right, queue)
}
// @lc code=end

/*
// @lcpr case=start
// [3,1,4,null,2]\n1\n
// @lcpr case=end

// @lcpr case=start
// [5,3,6,2,4,null,null,1]\n3\n
// @lcpr case=end

 */
export { kthSmallest }
