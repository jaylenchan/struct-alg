/* eslint-disable @typescript-eslint/no-explicit-any */
class TreeNode<T> {
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

export default TreeNode
