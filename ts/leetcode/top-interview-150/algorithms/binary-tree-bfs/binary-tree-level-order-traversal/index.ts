/*
 * @lc app=leetcode.cn id=102 lang=typescript
 * @lcpr version=30204
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  const ans: number[][] = []
  const queue: TreeNode[] = []

  if (!root)
    return ans;

  queue.push(root);

  while (queue.length) {
    let size = queue.length;
    const levelVals: number[] = []

    while (size > 0) {
      const node = queue.shift()!;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      size--;

      levelVals.push(node.val);
    }

    ans.push(levelVals)
  }

  return ans;
};
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

export const binary_tree_level_order_traversal = { levelOrder }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [102] 二叉树的层序遍历
     */
    binary_tree_level_order_traversal: {
      levelOrder: (root: TreeNode | null) => number[][]
    }
  }
}
