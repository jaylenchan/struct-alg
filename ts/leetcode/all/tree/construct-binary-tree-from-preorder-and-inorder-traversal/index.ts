/*
 * @lc app=leetcode.cn id=105 lang=typescript
 * @lcpr version=30204
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0 || preorder.length !== inorder.length) {
    return null
  }

  const preLeft = 0
  const preRight = preorder.length - 1
  const inLeft = 0
  const inRight = inorder.length - 1

  const inorderMap = new Map<number, number>()

  for (let i = 0; i <= inRight; i++) {
    inorderMap.set(inorder[i], i)
  }

  return _buildTree(preorder, preLeft, preRight, inorder, inLeft, inRight, inorderMap)
}

function _buildTree(
  preorder: number[],
  preLeft: number,
  preRight: number,
  inorder: number[],
  inLeft: number,
  inRight: number,
  inorderMap: Map<number, number>,
): TreeNode | null {
  if (inLeft > inRight)
    return null

  // 1. 从前序遍历数组中取出数组preLeft位置的值rootVal
  const rootVal = preorder[preLeft]
  const root = new TreeNode(rootVal)

  // 2. 到中序遍历数组中寻找rootVal所在的位置rootInOrderIndex

  const rootInOrderIndex = inorderMap.get(rootVal)!
  // 3. 因此以位置rootInOrderIndex为中心，
  //    往左就是rootVal的左子树，往右就是rootVal的右子树。
  //    我们更新左右子树应该拿到的inorder数组的范围

  // 左子树的中序遍历数组：
  const leftChildInLeft = inLeft
  const leftChildInRight = rootInOrderIndex - 1
  // 右子树的中序遍历数组:
  const rightChildInLeft = rootInOrderIndex + 1
  const rightChildInRight = inRight

  // 4. 根据中序遍历数组中的分割操作，我们可以接着算出左子树的节点个数，右子树的节点个数
  const leftChildSize = leftChildInRight - leftChildInLeft + 1

  // 5. 根据计算出来的左子树和右子树的节点个数，我们可以回到preorder前序遍历数组中，找到左右子树在原数组中的范围
  const leftChildPreLeft = preLeft + 1
  const leftChildPreRight = leftChildSize + leftChildPreLeft - 1

  const rightChildPreLeft = leftChildPreRight + 1
  const rightChildPreRight = preRight

  // 6. 递归创建左右子树
  root.left = _buildTree(
    preorder,
    leftChildPreLeft,
    leftChildPreRight,
    inorder,
    leftChildInLeft,
    leftChildInRight,
    inorderMap,
  )

  root.right = _buildTree(
    preorder,
    rightChildPreLeft,
    rightChildPreRight,
    inorder,
    rightChildInLeft,
    rightChildInRight,
    inorderMap,
  )

  return root
}
// @lc code=end

/*
// @lcpr case=start
// [3,9,20,15,7]\n[9,3,15,20,7]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */
export { buildTree }
