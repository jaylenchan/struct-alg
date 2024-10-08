/*
 * @lc app=leetcode.cn id=100 lang=typescript
 * @lcpr version=30204
 *
 * [100] 相同的树
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  /**
   * 假如根节点的值相同，那么就递归判断左右子树是否相同
   * 当p或q为空时，如果p和q都为空，那么返回true，否则返回false
   */

  if (!p || !q) {
    if (p === q)
      return true;

    return false;
  }

  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n[1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n[1,null,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,1]\n[1,1,2]\n
// @lcpr case=end

 */

export const same_tree = { isSameTree }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [100] 相同的树
     */
    same_tree: {
      isSameTree: (p: TreeNode | null, q: TreeNode | null) => boolean
    }
  }
}
