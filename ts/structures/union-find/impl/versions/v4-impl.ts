import type { IUnionFind } from 'ts/structures/union-find/common/union-find'
import UnionFindV2 from 'ts/structures/union-find/impl/versions/v2-impl'

/** 基于v2-impl的并查集优化：通过rank的优化 */
export default class UnionFind extends UnionFindV2 implements IUnionFind<number> {
  public rank: number[] // rank[i]表示根节点为i的树的高度

  constructor(rank: number) {
    super(rank)
    this.rank = new Array(rank)

    for (let i = 0; i < this.rank.length; i++) {
      this.rank[i] = 1
    }
  }

  public override union(p: number, q: number): void {
    if (this.isConnected(p, q))
      return

    const rootP = this.find(p)
    const rootQ = this.find(q)

    // 将rank低的集合合并到rank高的集合
    if (this.rank[rootP] < this.rank[rootQ]) {
      this.parent[rootP] = rootQ
    }
    else if (this.rank[rootP] > this.rank[rootQ]) {
      this.parent[rootQ] = this.parent[rootP]
    }
    else {
      this.parent[rootQ] = this.parent[rootP]
      this.rank[rootP] += 1
    }
  }
}
