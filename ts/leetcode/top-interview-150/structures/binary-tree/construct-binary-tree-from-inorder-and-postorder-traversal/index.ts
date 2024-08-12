/*
 * @lc app=leetcode.cn id=106 lang=typescript
 * @lcpr version=30204
 *
 * [106] 从中序与后序遍历序列构造二叉树
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (postorder.length === 0)
    return null;

  // 后序遍历的最后一个元素是根

  const rootVal = postorder[postorder.length - 1];
  const leftSize = inorder.indexOf(rootVal);

  const leftInorder = inorder.slice(0, leftSize);
  const rightInorder = inorder.slice(leftSize + 1);

  const leftPostorder = postorder.slice(0, leftSize);
  const rightPostorder = postorder.slice(leftSize, postorder.length - 1);

  return new TreeNode(rootVal, buildTree(leftInorder, leftPostorder), buildTree(rightInorder, rightPostorder));
};
// @lc code=end

/*
// @lcpr case=start
// [9,3,15,20,7]\n[9,15,7,20,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */

export const construct_binary_tree_from_inorder_and_postorder_traversal = { buildTree }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [106] 从中序与后序遍历序列构造二叉树
     */
    construct_binary_tree_from_inorder_and_postorder_traversal: {
      buildTree: (inorder: number[], postorder: number[]) => TreeNode | null
    }
  }
}
