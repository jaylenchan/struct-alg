import TreeNode from 'tsalg/leetcode/tree/TreeNode'

/*
 * @lc app=leetcode.cn id=297 lang=typescript
 *
 * [297] 二叉树的序列化与反序列化
 */
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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (!root)
    return ''

  const serializeQueue: string[] = []
  const nodeQueue: (TreeNode | null)[] = [root]

  while (nodeQueue.length > 0) {
    const node = nodeQueue.shift()!
    if (!node) {
      serializeQueue.push('null')
      continue
    }
    else {
      serializeQueue.push(String(node.val))
    }

    nodeQueue.push(node.left)
    nodeQueue.push(node.right)
  }

  return serializeQueue.join(',')
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (!data)
    return null
  const serializeQueue = data.split(',')

  return buildTree(serializeQueue)
}

function buildTree(serializeQueue: string[]): TreeNode | null {
  if (serializeQueue.length === 0)
    return null

  const root = new TreeNode(+serializeQueue.shift()!)
  const nodeQueue: TreeNode[] = [root]

  while (nodeQueue.length > 0) {
    const node = nodeQueue.shift()!

    const left = serializeQueue.shift()!

    const right = serializeQueue.shift()!

    if (left !== 'null') {
      node.left = new TreeNode(+left)
      nodeQueue.push(node.left)
    }

    if (right !== 'null') {
      node.right = new TreeNode(+right)
      nodeQueue.push(node.right)
    }
  }
  return root
}
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

export { serialize, deserialize }
