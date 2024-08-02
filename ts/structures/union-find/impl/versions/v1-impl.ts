import type { IUnionFind } from 'ts/structures/union-find/common/union-find'

// Quick Find
export default class UnionFind implements IUnionFind<number> {
  public setIds: number[] // 数组的每个元素代表这些元素所属于的集合的id

  constructor(size: number) {
    this.setIds = new Array(size)

    for (let i = 0; i < this.setIds.length; i++) {
      this.setIds[i] = i
    }
  }

  /**
   * 算法步骤：
   * 查看元素p的集合编号（集合代表元素索引） 是否等于 查看元素q的集合编号（集合代表元素索引）
   */
  public isConnected(p: number, q: number): boolean {
    return this.find(p) === this.find(q)
  }

  /**
   * 第一版union的算法步骤
   * 1. 判断待连接的p和q是否联通，如果已经连通，不需要再重复连通，直接停止操作
   * 2. 找到元素p所在集合的代表元素的索引，找到元素q所在集合代表元素索引
   * 3. 遍历集合数组，将所有集合是p集合的元素的集合编号，重新设置为集合q的集合编号（即设置成q所在集合的代表元素的索引）
   */
  public union(p: number, q: number): void {
    if (this.isConnected(p, q))
      return

    const setP = this.find(p)
    const setQ = this.find(q)

    for (let i = 0; i < this.setIds.length; i++) {
      if (this.setIds[i] === setP) {
        this.setIds[i] = setQ
      }
    }
  }

  /**
   * 第一版find算法步骤：
   * 1. 直接返回集合数组中元素p所在的集合编号（即p所在集合的代表元素索引）
   */
  public find(p: number): number {
    if (p < 0 || p > this.setIds.length) {
      throw new Error('p is out of bound.')
    }

    return this.setIds[p]
  }
}
