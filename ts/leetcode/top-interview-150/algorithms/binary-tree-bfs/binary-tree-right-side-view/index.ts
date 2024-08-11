/*
 * @lc app=leetcode.cn id=199 lang=typescript
 * @lcpr version=30204
 *
 * [199] 二叉树的右视图
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

function rightSideView(root: TreeNode | null): number[] {
  // 利用层序遍历，只拿最后一个元素
  // 模板题

  const ans: number[] = [];
  const queue: TreeNode[] = [];

  if (!root)
    return ans;

  queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;

    while (size > 0) {
      const node = queue.shift()!;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      if (size === 1) {
        ans.push(node.val);
      }

      size--;
    }
  }

  return ans;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,null,5,null,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

export const binary_tree_right_side_view = { rightSideView }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [199] 二叉树的右视图
     */
    binary_tree_right_side_view: {
      rightSideView: (root: TreeNode | null) => number[]
    }
  }
}
