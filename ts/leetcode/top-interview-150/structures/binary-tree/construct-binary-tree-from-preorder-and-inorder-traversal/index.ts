/*
 * @lc app=leetcode.cn id=105 lang=typescript
 * @lcpr version=30204
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0)
    return null;

  /**
   * 前序遍历：根、左、右
   * 中序遍历：左、根、右
   * 建树的主要思想就是：利用前序遍历和中序遍历找根和划分左右子树，然后用同样的方式建左子树和右子树。不断递归下去，直到节点用完。
   */

  // 前序遍历的第一个值就是当前树的根的值
  const rootVal = preorder[0];
  // =====接下来，重新为左子树找到属于左子树的preorder和inorder，为右子树找到属于右子树的preorder和inorder====
  const leftSize = inorder.indexOf(rootVal); // 从中序遍历序列中找到根的下标也代表左子树的数量，因为中序将树分成了左、根、右三个部分，在根的左边全是左子树的节点，右边全是右子树的节点。
  const leftPreorder = preorder.slice(1, 1 + leftSize); // 左子树的preorder
  const rightPreorder = preorder.slice(1 + leftSize) // 右子树的preorder

  const leftInorder = inorder.slice(0, leftSize) // 左子树的inorder
  const rightInorder = inorder.slice(leftSize + 1) // 右子树的inorder

  return new TreeNode(rootVal, buildTree(leftPreorder, leftInorder), buildTree(rightPreorder, rightInorder))
};
// @lc code=end

/*
// @lcpr case=start
// [3,9,20,15,7]\n[9,3,15,20,7]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */

export const construct_binary_tree_from_preorder_and_inorder_traversal = { buildTree }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [105] 从前序与中序遍历序列构造二叉树
     */
    construct_binary_tree_from_preorder_and_inorder_traversal: {
      buildTree: (preorder: number[], inorder: number[]) => TreeNode | null
    }
  }
}
