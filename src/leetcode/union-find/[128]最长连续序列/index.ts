/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */
export default longestConsecutive
// @lc code=start
class Node<V> {
  public value: V

  constructor(value: V) {
    this.value = value
  }
}

class UnionFInd {
  /**
   * 样本跟样本包装的节点之间的映射：一一对应的
   * 作用：通过样本找样本节点
   * 例子: 通过a找Node a,用来准备让a节点进行往上查找代表点的操作
   */
  public nodes: Map<number, Node<number>>

  /**
   * 节点跟节点的父亲节点之间的映射（通过这样一种设计，Node这个结构本身就不用放往上找的指针，直接通过map可以获取到上一个节点是谁）
   * 作用：充当“往上找的”功能，通过节点在表里找到父亲节点，这个操作就是往上找
   * 例子：通过Node a，想找Node a的父亲节点
   */
  public parents: Map<Node<number>, Node<number>>

  /**
   * 只有一个点，是一个集合的代表点的情况下，才在sizeMap中有记录（因为这个点事代表点，代表了一个集合，一个集合没法被多个点代表）
   * 作用：通过查找代表点在sizeMap中的映射，可以知道一个集合中有多少个节点。
   * 例子：union操作的时候，有一个操作就是需要通过代表点，找到一个集合有几个节点，然后继续下一步操作
   */
  public sizeMap: Map<Node<number>, number>

  constructor(values: number[]) {
    this.nodes = new Map<number, Node<number>>()
    this.parents = new Map<Node<number>, Node<number>>()
    this.sizeMap = new Map<Node<number>, number>()

    for (const value of values) {
      const node = new Node<number>(value)
      this.nodes.set(value, node)
      this.parents.set(node, node)
      this.sizeMap.set(node, 1)
    }
  }

  public getSize(): number {
    return this.nodes.size
  }

  public isConnected(p: number, q: number): boolean {
    if (!this.nodes.has(p) || !this.nodes.has(q)) {
      throw new Error('p or q is not in nodes map.')
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.find(this.nodes.get(p)!) == this.find(this.nodes.get(q)!)
  }

  // 将p所在的集合跟q所在的集合合并到一块
  public union(p: number, q: number): void {
    // 如果p或者q没在nodes登记过，直接忽略不做任何操作
    if (!this.nodes.has(p) || !this.nodes.has(q)) {
      return
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const rootP = this.find(this.nodes.get(p)!)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const rootQ = this.find(this.nodes.get(q)!)

    // 如果pRoot就是qRoot啥事不做，因为在一个集合，只有不是一个才说明不是一个集合需要合并
    if (rootP != rootQ) {
      // 2.查看代表点X所在的集合有几个节点；再查看代表点Y所在的集合有几个节点。
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const pSetSize = this.sizeMap.get(rootP)!
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const qSetSize = this.sizeMap.get(rootQ)!

      const bigger = pSetSize >= qSetSize ? rootP : rootQ
      const smaller = pSetSize < qSetSize ? rootP : rootQ

      // 3.将节点数量少的集合挂到节点数量多的集合下面。方法是：小集合的代表点挂到大集合的代表点上
      // 同时：1.更新大集合的节点数； 2.小集合的代表点从sizeMap删除
      this.parents.set(smaller, bigger)
      this.sizeMap.set(bigger, pSetSize + qSetSize) // 1.更新大集合的节点数
      this.sizeMap.delete(smaller) // 2.小集合的代表点从sizeMap删除
    }
  }

  public find(cur: Node<number>): Node<number> {
    const path: Node<number>[] = []

    // 让cur不断往上找，找到自己所在集合中的代表点
    while (cur != this.parents.get(cur)) {
      //路径压缩优化 操作1：记录沿途的节点
      path.push(cur)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      cur = this.parents.get(cur)!
    }

    //路径压缩优化 操作2：将cur找代表点沿途经过的节点的父节点全部指向代表点
    while (path.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.parents.set(path.pop()!, cur)
    }

    return cur
  }

  public getMaxConnectSize(): number {
    let maxSize = 0
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [_node, size] of this.sizeMap) {
      maxSize = Math.max(maxSize, size)
    }
    return maxSize
  }
}

function longestConsecutive(nums: number[]): number {
  const uf = new UnionFInd(nums)
  const numSet = new Set<number>(nums)

  for (const num of numSet) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const nextNumNode = uf.nodes.get(num + 1)!
    if (uf.find(nextNumNode) != null) {
      uf.union(num, num + 1)
    }
  }

  return uf.getMaxConnectSize()
}
// @lc code=end
