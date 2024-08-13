/*
 * @lc app=leetcode.cn id=222 lang=typescript
 * @lcpr version=30204
 *
 * [222] 完全二叉树的节点个数
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
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

function countNodes(root: TreeNode | null): number {
  // 层序遍历计算节点个数

  if (!root)
    return 0;

  let count = 0;
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    let size = queue.length;

    while (size > 0) {
      const parent = queue.shift()!;

      if (parent.left) {
        queue.push(parent.left);
      }

      if (parent.right) {
        queue.push(parent.right);
      }

      count++;
      size--;
    }
  }

  return count;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5,6]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

export const count_complete_tree_nodes = { countNodes };

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [222] 完全二叉树的节点个数
     */
    count_complete_tree_nodes: {
      countNodes: (root: TreeNode | null) => number
    }
  }
}
