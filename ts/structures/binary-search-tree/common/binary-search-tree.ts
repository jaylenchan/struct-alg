export interface IBinarySearchTree<T> {
  /** 获取二分搜索树的结点总数 */
  get size(): number

  /** 查看二分搜索树是否为空 */
  isEmpty: () => boolean

  /** 向二分搜索树中添加节点 */
  insert: (element: T) => boolean

  /** 删除二分搜索树中的指定结点 */
  remove: (element: T) => boolean

  /** 找到二分搜索树中值最小的结点 */
  findMin: () => T

  /** 找到二分搜索树中值最大的结点 */
  findMax: () => T

  /** 检查二分搜索树是否包含元素element */
  contains: (element: T) => boolean
}

export class TreeNode<T> {
  public static None = new TreeNode<any>(null)

  public value: T
  public left: TreeNode<T>
  public right: TreeNode<T>

  constructor(value: T, left?: TreeNode<T>, right?: TreeNode<T>) {
    this.value = value
    this.left = left ?? TreeNode.None
    this.right = right ?? TreeNode.None
  }
}
