/*
 * @lc app=leetcode.cn id=230 lang=typescript
 * @lcpr version=30204
 *
 * [230] 二叉搜索树中第K小的元素
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
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

function kthSmallest(root: TreeNode | null, k: number): number {
  // 二叉搜索树的中序遍历是一个升序数组, 找二叉搜索树的第k小的整数，相当于找一个有序数组中的第k小的整数

  const ans: number[] = [];

  inorder(root, ans);

  return ans[k - 1];
};

function inorder(root: TreeNode | null, ans: number[]) {
  if (!root)
    return;

  inorder(root.left, ans);
  ans.push(root.val)
  inorder(root.right, ans);
}
// @lc code=end

/*
// @lcpr case=start
// [3,1,4,null,2]\n1\n
// @lcpr case=end

// @lcpr case=start
// [5,3,6,2,4,null,null,1]\n3\n
// @lcpr case=end

 */

export const kth_smallest_element_in_a_bst = { kthSmallest };

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [230] 二叉搜索树中第K小的元素
     */
    kth_smallest_element_in_a_bst: {
      kthSmallest: (root: TreeNode | null, k: number) => number
    }
  }
}
