/*
 * @lc app=leetcode.cn id=129 lang=typescript
 * @lcpr version=30204
 *
 * [129] 求根节点到叶节点数字之和
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

function sumNumbers(root: TreeNode | null): number {
  const nums: number[] = []

  preorder(root!, '0', nums)

  return nums.reduce((acc, cur) => acc + cur, 0);
};

function preorder(root: TreeNode, num: string, nums: number[]) {
  // 如果左右节点都为空，说明当前节点是叶子节点
  // 结算结果
  if (!root.left && !root.right) {
    num += root.val;
    nums.push(+num);

    return;
  }

  // 只有子节点存在才继续遍历，否则停止遍历，这是为了保证不遍历到空节点
  if (root.left) {
    preorder(root.left, num + root.val, nums)
  }
  if (root.right) {
    preorder(root.right, num + root.val, nums)
  }
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [4,9,0,5,1]\n
// @lcpr case=end

 */

export const sum_root_to_leaf_numbers = { sumNumbers }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [129] 求根节点到叶节点数字之和
     */
    sum_root_to_leaf_numbers: {
      sumNumbers: (root: TreeNode | null) => number
    }
  }
}
