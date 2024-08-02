/*
 * @lc app=leetcode.cn id=114 lang=typescript
 * @lcpr version=30204
 *
 * [114] 二叉树展开为链表
 */
import type { TreeNode } from 'ts/leetcode/all/tree/models/TreeNode'

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
  _flatten(root)
}

// 将一棵二叉树按前序遍历的方式展开成一条链表，并返回链表的头部
function _flatten(root: TreeNode | null): void {
  if (root === null)
    return

  const rightChild = root.right
  const leftChild = root.left

  root.left = null
  root.right = leftChild

  _flatten(leftChild)
  _flatten(rightChild)

  if (root.right) {
    let cur = leftChild!
    while (cur.right !== null) {
      cur = cur.right
    }

    cur.right = rightChild
  }
  else {
    root.right = rightChild
  }
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
export { flatten }
