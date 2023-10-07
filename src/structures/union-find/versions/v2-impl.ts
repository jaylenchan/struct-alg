import type { IUnionFind } from '../type';
// Quick Union
export default class UnionFind implements IUnionFind<number> {
  public parent: number[]; // parent[i]表示第i位置的元素指向了哪个位置的元素

  constructor(size: number) {
    this.parent = new Array(size);

    for (let i = 0; i < this.parent.length; i++) {
      this.parent[i] = i;
    }
  }

  public isConnected(p: number, q: number): boolean {
    return this.find(p) == this.find(q);
  }

  /**
   * 第二版union算法步骤
   * 1. 特判：元素p和元素q是否连通，是的话停止连通操作
   * 2. 找到元素p所在集合的代表元素，找到元素q所在集合的代表元素
   * 3. 让p所在集合的代表元素的父亲指向元素q所在集合的代表元素
   *
   * 弊端：不对元素p所在集合和元素q所在集合的大小做判断，因为这两个集合构成的树的大小不一样，
   *      但是我们总是让前一个集合合并到后一个集合中，并没有考虑到前后集合的大小，所以很可能出现一个大集合总是往小集合上合并，
   *      导致逻辑结构上出现一棵大树合并到一棵小树上，极端情况可能出现合并成了一条单链表
   */
  public union(p: number, q: number): void {
    if (this.isConnected(p, q)) return;

    const rootP = this.find(p); // p所在集合的代表元素rootP
    const rootQ = this.find(q); // q所在集合的代表元素rootQ

    this.parent[rootP] = rootQ; // 让p所在集合的代表元素rootP的父亲指向q所在集合的代表元素rootQ
  }

  /**
   * 第二版find算法步骤
   * 1. 想找一个元素p所在集合的编号（该集合的代表元素的索引），就需要不断查找元素p的父亲
   * 2. 通过this.parent[p]可以找到p的父亲，然后判断p和p的父亲是不是同一个索引，如果是，说明已经来到了集合的代表元素
   * 3. 找到集合的代表元素后，返回该代表元素
   */
  public find(p: number): number {
    if (p < 0 || p > this.parent.length) {
      throw new Error('p is out of bound.');
    }

    while (p != this.parent[p]) {
      p = this.parent[p];
    }

    return p;
  }
}
