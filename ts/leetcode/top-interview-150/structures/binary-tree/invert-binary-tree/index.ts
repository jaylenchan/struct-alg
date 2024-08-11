/*
 * @lc app=leetcode.cn id=226 lang=typescript
 * @lcpr version=30204
 *
 * [226] 翻转二叉树
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

function invertTree(root: TreeNode | null): TreeNode | null {
  /**
   * 翻转二叉树，就是交换左右子树
   * 所以invertTree实际上就是对左右子树进行对调，做了个副作用，但是返回的还是自身
   * 递归终止条件是root为空
   *
   * 注意：由于对调了，所以要先保存左右子树的引用，才能进行对调。否则直接用会导致先对调了左子树，再对调右子树时，因为左子树已经变了，所以对调不正确
   */
  if (!root) {
    return null;
  }

  const rootRight = invertTree(root.right);
  const rootLeft = invertTree(root.left)

  root.left = rootRight;
  root.right = rootLeft;

  return root;
};
// @lc code=end

/*
// @lcpr case=start
// [4,2,7,1,3,6,9]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

export const invert_binary_tree = { invertTree }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [226] 翻转二叉树
     */
    invert_binary_tree: {
      invertTree: (root: TreeNode | null) => TreeNode | null
    }
  }
}
