import { Comparable } from '@tsalg/shared'

import type { Comparator } from '@tsalg/shared'
import TreeNode from './TreeNode'

import type { IBinarySearchTree } from './type'

export class BinarySearchTree<T> extends Comparable<T> implements IBinarySearchTree<T> {
  public root: TreeNode<T>
  private _nodeCount: number

  constructor(comparator?: Comparator<T>) {
    super(comparator)
    this._nodeCount = 0
    this.root = TreeNode.None
  }

  public get size(): number {
    return this._nodeCount
  }

  public isEmpty(): boolean {
    return this.size === 0
  }

  public insert(element: T): boolean {
    if (this.contains(element)) {
      return false
    }
    else {
      this.root = this._insert(this.root, element)
      this._nodeCount++

      return true
    }
  }

  public remove(element: T): boolean {
    if (this.contains(element)) {
      this.root = this._remove(this.root, element)
      this._nodeCount--

      return true
    }

    return false
  }

  // 寻找二分搜索树当中的最小元素
  public findMin(): T {
    if (this._nodeCount === 0) {
      throw new Error('BinarySearchTree is empty!')
    }

    return this._findMin(this.root).value
  }

  // 寻找二分搜索树当中的最大元素
  public findMax(): T {
    if (this._nodeCount === 0) {
      throw new Error('BinarySearchTree is empty!')
    }

    return this._findMax(this.root).value
  }

  public contains(element: T): boolean {
    return this._contains(this.root, element)
  }

  public traverseInorder(): T[] {
    const tranverse: T[] = []

    this._traverseInorder(this.root, tranverse)

    return tranverse
  }

  public override toString(): string {
    return this.traverseInorder().toString()
  }

  /**
   * 向二分搜索树中插入节点并返回插入新节点后的二分搜索树的根
   */
  private _insert(node: TreeNode<T>, element: T): TreeNode<T> {
    if (node.value === null) {
      node = new TreeNode(element)
    }
    else {
      if (this.aLessThanb(element, node.value)) {
        node.left = this._insert(node.left, element)
      }
      else {
        node.right = this._insert(node.right, element)
      }
    }

    return node
  }

  // 删除以node为根的二分搜索树中指为e的节点
  // 返回删除节点后新的二分搜索树的根
  private _remove(node: TreeNode<T>, element: T): TreeNode<T> {
    if (node.value !== null) {
      if (this.aLessThanb(element, node.value)) {
        node.left = this._remove(node.left, element)
      }
      else if (this.aGreaterThanb(element, node.value)) {
        node.right = this._remove(node.right, element)
      }
      else {
        // this.aEqualTob(element, node.value)删除的结点是当前子树的root
        if (node.left.value === null) {
          return node.right
        }
        else if (node.right.value === null) {
          return node.left
        }
        else {
          /**
           * 删除的结点是当前子树的root，
           * 但是左右子树均不为空。此时应该找到整棵树中第一个比这个结点值大的那个结点，让它成为新树的根，维持二分搜索树的布局
           * 因此，其实就是找到右子树的最小值作为新的根，左子树依旧是原来树的左子树
           */
          const successor = this._findMin(node.right)

          node.value = successor.value
          node.right = this._remove(node.right, successor.value)
        }
      }
    }

    return node
  }

  private _findMin(node: TreeNode<T>): TreeNode<T> {
    if (node.left.value === null)
      return node

    return this._findMin(node.left)
  }

  private _findMax(node: TreeNode<T>): TreeNode<T> {
    if (node.right.value === null)
      return node

    return this._findMax(node.right)
  }

  // 查看以root为根的二分搜索树是否包含元素e
  private _contains(node: TreeNode<T>, element: T): boolean {
    if (node.value === null)
      return false

    if (this.aEqualTob(element, node.value)) {
      return true
    }
    else if (this.aLessThanb(element, node.value)) {
      return this._contains(node.left, element)
    }
    else {
      return this._contains(node.right, element)
    }
  }

  private _traverseInorder(node: TreeNode<T>, tranverse: T[]): void {
    if (node.value !== null) {
      this._traverseInorder(node.left, tranverse)
      tranverse.push(node.value)
      this._traverseInorder(node.right, tranverse)
    }
  }
}
