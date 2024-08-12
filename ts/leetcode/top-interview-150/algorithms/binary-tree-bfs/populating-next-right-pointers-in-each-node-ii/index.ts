/*
 * @lc app=leetcode.cn id=117 lang=typescript
 * @lcpr version=30204
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */
class _Node {
  val: number
  left: _Node | null
  right: _Node | null
  next: _Node | null

  constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.next = (next === undefined ? null : next)
  }
}
// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: _Node | null): _Node | null {
  if (!root)
    return null;

  const queue: _Node[] = [root];

  while (queue.length > 0) {
    let size = queue.length;
    let prevNode: _Node | null = null;

    while (size > 0) {
      const parent = queue.shift()!;

      if (prevNode) {
        prevNode.next = parent;
      }
      prevNode = parent;

      if (parent.left) {
        queue.push(parent.left);
      }

      if (parent.right) {
        queue.push(parent.right);
      }

      size--;
    }
  }

  return root;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5,null,7]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

export const populating_next_right_pointers_in_each_node_ii = { connect }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [117] 填充每个节点的下一个右侧节点指针 II
     */
    populating_next_right_pointers_in_each_node_ii: {
      connect: (root: _Node | null) => _Node | null
    }
  }
}
