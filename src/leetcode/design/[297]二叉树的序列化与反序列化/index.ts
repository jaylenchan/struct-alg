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
  if (!root) return ''

  const serializeQueue: string[] = []
  const nodeQueue: (TreeNode | null)[] = [root]

  while (nodeQueue.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const node = nodeQueue.shift()!
    if (!node) {
      serializeQueue.push('null')
      continue
    } else {
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
  if (!data) return null
  const serializeQueue = data.split(',')

  return buildTree(serializeQueue)
}

function buildTree(serializeQueue: string[]): TreeNode | null {
  if (serializeQueue.length == 0) return null

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = new TreeNode(+serializeQueue.shift()!)
  const nodeQueue: TreeNode[] = [root]

  while (nodeQueue.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const node = nodeQueue.shift()!
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const left = serializeQueue.shift()!
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const right = serializeQueue.shift()!

    if (left != 'null') {
      node.left = new TreeNode(+left)
      nodeQueue.push(node.left)
    }

    if (right != 'null') {
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

/**
 * #思路#
 * 序列化与反序列我们都用bfs来实现。
 * 1. 序列化：
 *          - 如果根节点都不存在直接返回空字符串。
 *          - 否则， 建立一个字符串队列serializeQueue和节点队列nodeQueue，其中字符串队列用来收集序列化的结果，节点队列用来进行bfs
 *          - 将root节点放入节点队列nodeQueue，启动bfs流程：
 *            - 取出nodeQueue中的队头节点，进行判断
 *              - 如果node节点为空null，我们直接将'null'字符串收集到serializeQueue队列中
 *              - 如果node节点不为空，我们将node的val取出来收集到serializeQueue队列中
 *          - 完成序列字符串收集后，我们无需像正常bfs那么判断左右孩子是否为空，我们直接加入左右孩子，就算是null我们也加入
 *          - 重复以上过程，直到nodeQueue为空
 *          - 将serializeQueue中用','拼接返回（注意由于null也会加入，其实我们也会把叶子节点的左右null加入，序列化的结果是叶子节点的null也能看得到的，这一步的作用是方便反序列直接可以利用这里的叶子节点的左右null）
 * 2. 反序列化：
 *          - 特判，如果data输入为空，则字符串为空，直接返回null
 *          - 否则，我们先将data通过','进行拆分，然后交给buildTree函数帮我们构建二叉树
 *          - 进入buildTree，我们一样先判空：如果在构建树的过程中serializeQueue队列为空，就是base条件，返回null即可
 *          - 我们先弹出serializeQueue的第一个字符串，然后构建根节点，再将其加入nodeQueue
 *          - 我们构建当前子树：
 *            - 弹出nodeQueue队头，即当前子树的根节点
 *            - 接着再从serializeQueue依次弹出两个字符串，判断
 *              - 如果第一个字符串不为null，则构建左孩子，node.left = 左孩子；然后将左孩子加入nodeQueue
 *              - 如果第二个字符串不为null，则构建右孩子，node.right = 右孩子;然后将右孩子加入nodeQueue
 *          -  这里我们能够通过nodeQueue长度判空的方式构建树的原理是：我们在之前进行序列化的时候，将叶子节点的左右孩子即使是空节点也加入了序列化结果中，
 *             因此，我们总是能够一个node，两个val的方式进行当前子树构建的，最后的叶子节点就算是加入了队列当中，也会因为弹出了两个val是'null'导致if逻辑进不去，结束流程
 */
