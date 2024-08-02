/*
 * @lc app=leetcode.cn id=547 lang=typescript
 * @lcpr version=30204
 *
 * [547] 省份数量
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
class UnionFind {
  public sets: number
  private _parent: number[]
  private _size: number[]

  constructor(_size: number) {
    this._parent = []
    this._size = []
    this.sets = _size

    for (let i = 0; i < _size; i++) {
      this._parent[i] = i
      this._size[i] = 1
    }
  }

  public find(i: number): number {
    let hi = 0
    const help = []

    while (i !== this._parent[i]) {
      help[hi++] = i
      i = this._parent[i]
    }

    while (hi >= 0) {
      this._parent[help[--hi]] = i
    }

    return i
  }

  public union(i: number, j: number): void {
    const rootI = this.find(i)
    const rootJ = this.find(j)

    if (rootI !== rootJ) {
      const ISetSize = this._size[rootI]
      const JSetSize = this._size[rootJ]

      const big = ISetSize > JSetSize ? rootI : rootJ
      const small = big === rootI ? rootJ : rootI

      this._parent[small] = big
      this._size[big] = ISetSize + JSetSize
      this.sets--
    }
  }
}

function findCircleNum(isConnected: number[][]): number {
  if (isConnected.length === 0)
    return 0

  const _size = isConnected.length
  const uf = new UnionFind(_size)

  for (let i = 0; i < _size; i++) {
    for (let j = i + 1; j < _size; j++) {
      if (isConnected[i][j] === 1) {
        uf.union(i, j)
      }
    }
  }

  return uf.sets
}

// @lc code=end

/*
// @lcpr case=start
// [[1,1,0],[1,1,0],[0,0,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,0,0],[0,1,0],[0,0,1]]\n
// @lcpr case=end

 */
export { findCircleNum }
