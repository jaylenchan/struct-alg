/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
 */

import type TreeNode from '../TreeNode'


export default // @lc code=start
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
  if (root == null) return

  const rightChild = root.right
  const leftChild = root.left

  root.left = null
  root.right = leftChild

  _flatten(leftChild)
  _flatten(rightChild)

  if (root.right) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    let cur = leftChild!
    while (cur.right != null) {
      cur = cur.right
    }

    cur.right = rightChild
  } else {
    root.right = rightChild
  }
}

/**
 * 思路：
 * 1. 保存根的左右子树的引用
 * 2. 依照题意要求对树做链表的改造
 * 3. 完事之后按照先序遍历的方式，利用变量保存下的左右子树进行同样的改造操作
 * 4. 由于右子树在一开始被独立开了跟根的联系，所以最后需要做的操作如下：
 *    - 判断根此时的右子树是否存在，如果不存在，说明树一开始就没有左子树，直接将改造后的右子树赋值给根作为根的右子树
 *    - 否则（if语句）此时根的右子树存在，不断找到这棵树（现在是链表）的最后一个节点，然后让右子树成为这个节点的右子树即可
 */
// @lc code=end
