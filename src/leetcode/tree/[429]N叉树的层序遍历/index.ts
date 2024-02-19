/*
 * @lc app=leetcode.cn id=429 lang=typescript
 *
 * [429] N 叉树的层序遍历
 */
import type { Node } from '../models/Node'

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function levelOrder(root: Node | null): number[][] {
  if (root == null) return []

  const queue: Node[] = []
  const result: number[][] = []

  queue.push(root)

  while (queue.length > 0) {
    const curLevel: number[] = []
    const size = queue.length

    for (let i = 0; i < size; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const curNode = queue.shift()!
      curLevel.push(curNode.val)

      curNode.children.forEach(child => {
        queue.push(child)
      })
    }

    result.push(curLevel)
  }

  return result
}
// @lc code=end

export { levelOrder }
