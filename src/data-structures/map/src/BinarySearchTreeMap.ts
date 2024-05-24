import type { IMap } from './type'

class TNode<K, V> {
  public key: K
  public value: V
  public left: TNode<K, V> | null
  public right: TNode<K, V> | null

  constructor(key: K, value: V) {
    this.key = key
    this.value = value
    this.left = null
    this.right = null
  }
}

export class BinarySearchTreeMap<K, V> implements IMap<K, V> {
  private _root: TNode<K, V> | null
  private _size: number

  constructor() {
    this._root = null
    this._size = 0
  }

  // 向二分搜索树当中添加新的key，value
  public add(key: K, value: V): void {
    this._root = this._add(this._root, key, value)
  }

  public remove(key: K): V | null {
    const node = this._getNode(this._root, key)

    if (node != null) {
      this._root = this._remove(this._root, key)
      return node.value
    }

    return null
  }

  public contains(key: K): boolean {
    const node = this._getNode(this._root, key)

    return node != null
  }

  public get(key: K): V | null {
    const node = this._getNode(this._root, key)

    return node == null ? null : node.value
  }

  public set(key: K, newValue: V): void {
    const node = this._getNode(this._root, key)

    if (node == null) {
      throw new Error(`${key} doesn't exist!`)
    } else {
      node.value = newValue
    }
  }

  public getSize(): number {
    return this._size
  }

  public isEmpty(): boolean {
    return this._size == 0
  }

  // 向以root为根的二分搜索树当中插入key，value
  // 返回插入新节点后二分搜索树的根
  private _add(_root: TNode<K, V> | null, key: K, value: V): TNode<K, V> {
    if (_root == null) {
      this._size += 1
      return new TNode(key, value)
    }

    if (_root.key < key) {
      _root.left = this._add(_root.left, key, value)
    } else if (_root.key > key) {
      _root.right = this._add(_root.right, key, value)
    } else {
      _root.value = value
    }

    return _root
  }

  // 返回以root为根的二分搜索树中，key所在的节点
  private _getNode(_root: TNode<K, V> | null, key: K): TNode<K, V> | null {
    if (_root == null) return null

    if (_root.key == key) {
      return _root
    } else if (_root.key > key) {
      return this._getNode(_root.right, key)
    } else {
      return this._getNode(_root.left, key)
    }
  }

  // 返回以root为根的二分搜索树中的最小节点
  private _minimum(_root: TNode<K, V>): TNode<K, V> {
    if (_root.left == null) {
      return _root
    } else {
      return this._minimum(_root)
    }
  }

  // 删除掉以root为根的二分搜索树当中的最小节点
  // 返回删除节点后新的二分搜索树的根
  private _removeMin(_root: TNode<K, V>): TNode<K, V> | null {
    if (_root.left == null) {
      this._size -= 1
      const rightNode = _root.right
      _root.right = null
      return rightNode
    } else {
      _root.left = this._removeMin(_root.left)
      return _root
    }
  }

  // 删除以node为根的二分搜索树中键为key的节点
  // 返回删除节点后新的二分搜索树的根
  private _remove(_root: TNode<K, V> | null, key: K): TNode<K, V> | null {
    if (_root == null) {
      return null
    } else {
      if (key < _root.key) {
        _root.left = this._remove(_root.left, key)

        return _root
      } else if (key > _root.key) {
        _root.right = this._remove(_root.right, key)

        return _root
      } else {
        if (_root.left == null) {
          const rightNode = _root.right
          _root.right = null
          this._size -= 1
          return rightNode
        }
        if (_root.right == null) {
          const leftNode = _root.left
          _root.left = null
          this._size -= 1
          return leftNode
        }

        // 待删除的节点左右子树均不为空
        const successor = this._minimum(_root.right)
        successor.right = this._removeMin(_root.right)
        successor.left = _root.left

        _root.left = _root.right = null

        return successor
      }
    }
  }
}
