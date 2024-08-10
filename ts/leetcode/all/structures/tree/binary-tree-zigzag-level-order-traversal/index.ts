/*
 * @lc app=leetcode.cn id=103 lang=typescript
 * @lcpr version=30204
 *
 * [103] 二叉树的锯齿形层序遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null)
    return []

  const queue: TreeNode[] = []
  const reuslt: number[][] = []
  let index = 0

  queue.push(root)

  while (queue.length > 0) {
    const size = queue.length
    const level: number[] = []
    index += 1

    for (let i = 0; i < size; i++) {
      const node = queue.shift()!
      if (index % 2 === 0) {
        level.unshift(node.val)
      }
      else {
        level.push(node.val)
      }

      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }
    reuslt.push(level)
  }

  return reuslt
}
// @lc code=end

/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
export { zigzagLevelOrder }
