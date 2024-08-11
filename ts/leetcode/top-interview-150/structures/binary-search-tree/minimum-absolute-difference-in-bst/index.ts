/*
 * @lc app=leetcode.cn id=530 lang=typescript
 * @lcpr version=30204
 *
 * [530] 二叉搜索树的最小绝对差
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

function getMinimumDifference(root: TreeNode | null): number {
  /**
   * 二叉搜索树的中序遍历是一个递增序列
   * 因此只需要比较相邻两个节点的差值即可，因为相邻两个节点的差值最小
   * 不断更新最小的差值
   */
  const nums: number[] = []

  inorder(root, nums)

  let minDiff = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < nums.length; i++) {
    const diff = Math.abs(nums[i] - nums[i - 1])

    minDiff = Math.min(diff, minDiff)
  }

  return minDiff
};

function inorder(root: TreeNode | null, nums: number[]): void {
  if (!root)
    return;

  inorder(root.left, nums);

  nums.push(root.val);

  inorder(root.right, nums)
}
// @lc code=end

/*
// @lcpr case=start
// [4,2,6,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,48,null,null,12,49]\n
// @lcpr case=end

 */

export const minimum_absolute_difference_in_bst = { getMinimumDifference };

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [530] 二叉搜索树的最小绝对差
     */
    minimum_absolute_difference_in_bst: {
      getMinimumDifference: (root: TreeNode | null) => number
    }
  }
}
