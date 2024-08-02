/*
 * @lc app=leetcode.cn id=429 lang=typescript
 * @lcpr version=30204
 *
 * [429] N 叉树的层序遍历
 */
import type { Node } from 'ts/leetcode/all/tree/models/Node'

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *
 *     constructor(v: number) {
 *         this.val = v;
 *         this.children = [];
 *     }
 * }
 */

function levelOrder(root: Node | null): number[][] {
  if (root === null)
    return []

  const queue: Node[] = []
  const result: number[][] = []

  queue.push(root)

  while (queue.length > 0) {
    const curLevel: number[] = []
    const size = queue.length

    for (let i = 0; i < size; i++) {
      const curNode = queue.shift()!
      curLevel.push(curNode.val)

      curNode.children.forEach((child) => {
        queue.push(child)
      })
    }

    result.push(curLevel)
  }

  return result
}
// @lc code=end

/*
// @lcpr case=start
// [1,null,3,2,4,null,5,6]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\n
// @lcpr case=end

 */
export { levelOrder }
