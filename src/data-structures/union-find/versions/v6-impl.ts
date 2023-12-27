import UnionFindV5 from './v5-impl';

import type { IUnionFind } from '../type';

// Quick Union optimize  基于路径压缩的优化
export default class UnionFind
  extends UnionFindV5
  implements IUnionFind<number>
{
  /** 路径压缩终极优化 find过程 */
  public find(p: number): number {
    if (p < 0 || p > this.parent.length) {
      throw new Error('p is out of bound.');
    }
    const path: number[] = [];

    while (p != this.parent[p]) {
      // 增加这个过程
      path.push(p);
      p = this.parent[p];
    }

    while (path.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.parent[path.pop()!] = p;
    }

    return p;
  }
}
