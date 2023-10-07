/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
 */

import type TreeNode from '../TreeNode'


export default sumNumbers
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
  if (root == null) return 0
  return pathSum(root, 0)
}

/* 返回以node为根节点的树到叶子节点的所有路径转换成数字后的总和 */
function pathSum(node: TreeNode, preSum: number): number {
  // 终止节点就是已经到叶子节点了
  if (!node.left && !node.right) {
    return preSum * 10 + node.val
  }

  preSum = preSum * 10 + node.val
  let sum = 0
  if (node.left) {
    sum += pathSum(node.left, preSum)
  }
  if (node.right) {
    sum += pathSum(node.right, preSum)
  }

  return sum
}

/**
 * 思路：
 * 定义pathSum函数，语义是返回以node为根的数到叶子节点的路径转化的数字总和
 * base case是节点是叶子节点了
 * 如果非base case，则获取利用公式cur * 10 + node.val获取达到当前节点所
 * 转换的数字的大小
 * 递归获取左右子树的路径总和，然后相加起来就是根节点的树的路径总和
 *
 * 技巧：
 * 给定字符串"123",求数字的方式就是
 * 字符串从左往右遍历，依照公式有
 * 0 * 10 + 1 = 1
 * 1 * 10 + 2 = 12
 * 12* 10 + 3 = 123
 * let sum = 0;
 * sum = sum*10 + curVal
 */
// @lc code=end
