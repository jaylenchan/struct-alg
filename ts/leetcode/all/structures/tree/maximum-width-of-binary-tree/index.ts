/*
 * @lc app=leetcode.cn id=662 lang=typescript
 * @lcpr version=30204
 *
 * [662] 二叉树最大宽度
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

function widthOfBinaryTree(root: TreeNode | null): bigint {
  if (root === null)
    return BigInt(0)
  const queue: [TreeNode, bigint][] = []
  let maxLen = BigInt(1)

  queue.push([root, BigInt(1)])

  while (queue.length > 0) {
    const size = queue.length
    const right = queue[size - 1][1]
    const left = queue[0][1]

    for (let i = 0; i < size; i++) {
      const [node, index] = queue.shift()!

      if (node.left) {
        queue.push([node.left, BigInt(2) * index])
      }

      if (node.right) {
        queue.push([node.right, BigInt(2) * index + BigInt(1)])
      }
    }

    if (maxLen < right - left + BigInt(1)) {
      maxLen = right - left + BigInt(1)
    }
  }

  return maxLen
}
// @lc code=end

/*
// @lcpr case=start
// [1,3,2,5,3,null,9]\n
// @lcpr case=end

// @lcpr case=start
// [1,3,2,5,null,null,9,6,null,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,3,2,5]\n
// @lcpr case=end

 */
export { widthOfBinaryTree }
