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

/**
 * 从数组构建二叉树
 */
export function buildTreeFromArray(arr: (number | null)[]): TreeNode | null {
  // 构建具体思路： 从数组的第一个元素开始，构建树的每一层，每一层的节点都是从左到右的。
  // 1. 从数组中取出第一个元素，作为根节点
  // 2. 将根节点放入队列中
  // 3. 从数组中取出下一个元素，作为根节点的左子节点
  // 4. 将左子节点放入队列中
  // 5. 从数组中取出下一个元素，作为根节点的右子节点
  // 6. 将右子节点放入队列中
  // 7. 重复3-6，直到数组中的元素取完
  // 8. 返回根节点

  if (arr.length === 0 || arr[0] === null)
    return null;

  const root = new TreeNode(arr[0]);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift()!;
    if (current !== null) {
      if (i < arr.length && arr[i] !== null) {
        current.left = new TreeNode(arr[i]!);
        queue.push(current.left);
      }
      i++;
      if (i < arr.length && arr[i] !== null) {
        current.right = new TreeNode(arr[i]!);
        queue.push(current.right);
      }
      i++;
    }
  }

  return root;
}
