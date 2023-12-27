import UnionFindV2 from './v2-impl';

import type { IUnionFind } from '../type';

/** 基于v2-impl的并查集优化：通过size的优化 */
export default class UnionFind
  extends UnionFindV2
  implements IUnionFind<number>
{
  public size: number[]; // size[i]表示以i为根的集合中元素的个数

  constructor(size: number) {
    super(size);

    this.size = new Array(size);

    for (let i = 0; i < this.size.length; i++) {
      this.size[i] = 1;
    }
  }

  /**
   * 第三版union的主要优化步骤：
   * 判断需要合并的两个集合的大小，将小的集合合并到大的集合当中
   */
  public union(p: number, q: number): void {
    if (this.isConnected(p, q)) return;

    const rootP = this.find(p); // p所在集合的代表元素rootP
    const rootQ = this.find(q); // q所在集合的代表元素rootQ

    /**
     * 将以pRoot或者qRoot为根的集合，做两个集合元素大小的判断，哪个集合元素少，就被合并到元素多的集合上去
     * 合并的方式就是：将元素少的集合的根的父亲指向元素多的集合的根
     */
    const bigger = this.size[rootP] >= this.size[rootQ] ? rootP : rootQ;
    const smaller = this.size[rootP] < this.size[rootQ] ? rootP : rootQ;

    // 将smaller的父亲指向bigger
    this.parent[smaller] = bigger;
    this.size[bigger] = this.size[bigger] + this.size[smaller];
  }
}
