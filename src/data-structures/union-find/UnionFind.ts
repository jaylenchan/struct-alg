import type { IUnionFind } from './type'

export class UnionFind implements IUnionFind<number> {
  // sets表示一共有多少个集合
  public sets: number
  // _parent[i]表示i的父亲
  private _parent: number[]
  // 如果i是集合的代表元素，则size[i]表示i所在集合的元素个数，否则size[i]无实际意义
  private _size: number[]

  constructor(_size: number) {
    this._parent = []
    this._size = []
    this.sets = _size

    // 结构初始化：因为一开始还没有任何连通操作，所有元素都是单独一个集合
    for (let i = 0; i < _size; i++) {
      // i自己的父亲是i自己;
      this._parent[i] = i
      // i所在集合的大小是1
      this._size[i] = 1
    }
  }

  /**
   * 算法理解：从元素i开始往上查找，往上到不能再往上找了，返回最顶的节点（代表节点）。算法主逻辑就是做这件简单的事情而已
   * 算法优化：在查找过程当中做“路径压缩”(代码中被相关路径压缩优化注释包裹的内容就是路径压缩要做的事情)
   */
  public find(i: number): number {
    /*--------------路径压缩内容-----------*/
    let hi = 0
    const help: number[] = []
    /*--------------路径压缩内容-----------*/

    while (i != this._parent[i]) {
      /*--------------路径压缩内容-----------*/
      help[hi++] = i
      /*--------------路径压缩内容-----------*/
      i = this._parent[i]
    }

    /*--------------路径压缩内容-----------*/
    while (hi >= 0) {
      this._parent[help[--hi]] = i
    }
    /*--------------路径压缩内容-----------*/

    return i
  }

  public isConnected(i: number, j: number): boolean {
    return this.find(i) == this.find(j)
  }

  public union(i: number, j: number): void {
    /**
     * 找到元素i和元素j各自所在集合的代表元素
     */
    const rootI = this.find(i)
    const rootJ = this.find(j)

    // 如果代表元素rootI和代表元素rootJ是同一个节点，说明i，j连通，不需要做任何操作
    if (rootI != rootJ) {
      /**
       * 获取集合I和集合J各自的元素大小
       */
      const ISetSize = this._size[rootI]
      const JSetSize = this._size[rootJ]

      /**
       * 判断设置集合I和集合J谁是大集合，谁是小集合
       */
      const big = ISetSize > JSetSize ? rootI : rootJ
      const small = big == rootI ? rootJ : rootI

      /**
       * 1.让大集合代表元素成为小集合代表元素的父亲
       * 2.大集合的大小 = 小集合大小 + 原大集合大小
       * 3.集合个数减1（因为小集合I已经被合并了）
       */
      this._parent[small] = big
      this._size[big] = ISetSize + JSetSize
      this.sets--
    }
  }
}
