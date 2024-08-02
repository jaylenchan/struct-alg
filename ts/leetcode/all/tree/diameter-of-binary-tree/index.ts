/*
 * @lc app=leetcode.cn id=543 lang=typescript
 * @lcpr version=30204
 *
 * [543] 二叉树的直径
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  return process(root).maxDistance
}

interface Info {
  maxDistance: number
  height: number
}
function process(root: TreeNode | null): Info {
  if (root === null) {
    return {
      maxDistance: 0,
      height: 0,
    }
  }

  const leftInfo = process(root.left)
  const rightInfo = process(root.right)

  return {
    maxDistance: Math.max(Math.max(leftInfo.maxDistance, rightInfo.maxDistance), leftInfo.height + rightInfo.height),
    height: Math.max(leftInfo.height, rightInfo.height) + 1,
  }
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */
export { diameterOfBinaryTree }
