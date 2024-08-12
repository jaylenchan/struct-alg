/*
 * @lc app=leetcode.cn id=114 lang=typescript
 * @lcpr version=30204
 *
 * [114] 二叉树展开为链表
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  const nodes: TreeNode[] = []

  preorder(root, nodes);

  let loc = nodes.length - 1;

  while (loc > 0) {
    nodes[loc - 1].right = nodes[loc];
    nodes[loc - 1].left = null;
    loc--;
  }
};

function preorder(root: TreeNode | null, nodes: TreeNode[]): void {
  if (!root)
    return;

  nodes.push(root);

  preorder(root.left, nodes);
  preorder(root.right, nodes)
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,5,3,4,null,6]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

export const flatten_binary_tree_to_linked_list = { flatten }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [114] 二叉树展开为链表
     */
    flatten_binary_tree_to_linked_list: {
      flatten: (root: TreeNode | null) => void
    }
  }
}
