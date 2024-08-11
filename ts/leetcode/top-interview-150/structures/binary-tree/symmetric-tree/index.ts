/*
 * @lc app=leetcode.cn id=101 lang=typescript
 * @lcpr version=30204
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  // 按照定义，一颗二叉树是否对成，就是左右子树是否对称。
  // 于是我们写一个递归函数，判断左右子树是否对称，被比较的节点如果值相同，我们需要继续比较他们的左右子树
  // 比较的方式是左树的左和右树的右，左树的右和右树的左。
  return checkLR(root!.left, root!.right)
};

function checkLR(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  }

  if (!p || !q) {
    return false;
  }

  return p.val === q.val && checkLR(p.left, q.right) && checkLR(p.right, q.left);
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,2,3,4,4,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,null,3,null,3]\n
// @lcpr case=end

 */

export const symmetric_tree = { isSymmetric }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [101] 对称二叉树
     */
    symmetric_tree: {
      isSymmetric: (root: TreeNode | null) => boolean
    }
  }
}
