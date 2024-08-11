/*
 * @lc app=leetcode.cn id=103 lang=typescript
 * @lcpr version=30204
 *
 * [103] 二叉树的锯齿形层序遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  // 只要按层遍历，不管方向，都能用层序遍历的方法，模板题

  const ans: number[][] = [];
  const queue: TreeNode[] = [];
  let fromLeft = true;

  if (!root)
    return ans;

  queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;
    const levelVals: number[] = [];

    while (size > 0) {
      const node = queue.shift()!;

      if (fromLeft) {
        levelVals.push(node.val)
      }
      else {
        levelVals.unshift(node.val);
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      size--;
    }

    ans.push(levelVals);
    fromLeft = !fromLeft;
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

export const binary_tree_zigzag_level_order_traversal = { zigzagLevelOrder }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [103] 二叉树的锯齿形层序遍历
     */
    binary_tree_zigzag_level_order_traversal: {
      zigzagLevelOrder: (root: TreeNode | null) => number[][]
    }
  }
}
