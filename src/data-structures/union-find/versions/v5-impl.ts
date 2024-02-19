import UnionFindV4 from './v4-impl'

import type { IUnionFind } from '../type'

// Quick Union optimize  基于路径压缩的优化
export default class UnionFind extends UnionFindV4 implements IUnionFind<number> {
  /** 路径压缩普通优化 find过程 */
  public find(p: number): number {
    if (p < 0 || p > this.parent.length) {
      throw new Error('p is out of bound.')
    }

    while (p != this.parent[p]) {
      // 增加这个过程
      this.parent[p] = this.parent[this.parent[p]]
      p = this.parent[p]
    }

    return p
  }
}
