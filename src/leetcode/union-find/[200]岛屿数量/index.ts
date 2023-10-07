/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
class UnionFind {

  public sets: number
  public lands: Set<number>
  private _parent: number[]
  private _size: number[]

  constructor(_size: number) {
    this._parent = []
    this._size = []
    this.sets = _size
    this.lands = new Set<number>()

    for (let i = 0; i < _size; i++) {
      this._parent[i] = i
      this._size[i] = 1
    }
  }

  public find(i: number): number {
    let hi = 0
    const help: number[] = []

    while (i != this._parent[i]) {
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

    if (rootI != rootJ) {
      const ISetSize = this._size[rootI]
      const JSetSize = this._size[rootJ]

      const big = ISetSize > JSetSize ? rootI : rootJ
      const small = big == rootI ? rootJ : rootI

      this.lands.add(big)
      this.lands.delete(small)

      this._parent[small] = big
      this._size[big] = ISetSize + JSetSize
      this.sets--
    }
  }

}

function numIslands(grid: string[][]): number {
  if (grid.length == 0 || grid[0].length == 0) return 0

  const rows = grid.length
  const cols = grid[0].length
  const uf = new UnionFind(rows * cols)
  const positions = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ]

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == '1') uf.lands.add(index(cols, i, j))
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == '1') {
        for (const [offsetX, offsetY] of positions) {
          const newX = i + offsetX
          const newY = j + offsetY
          if (inArea(rows, cols, newX, newY) && grid[newX][newY] == '1') {
            uf.union(index(cols, i, j), index(cols, newX, newY))
          }
        }
      }
    }
  }

  return uf.lands.size
}

/** 根据二维坐标返回一维索引 */
function index(cols: number, i: number, j: number): number {
  return i * cols + j
}

function inArea(rows: number, cols: number, i: number, j: number): boolean {
  return i >= 0 && i < rows && j >= 0 && j < cols
}
// @lc code=end

export default numIslands

/**
 * 思路：并查集建立
 * 题目要求我们求岛屿的数量，其实就是求相应位置1的上下左右是否还有1，并且与这些1进行连通，然后找出连通后的部分有多少岛屿就是多少
 * 根据要求我们只需要建立并查集，对矩阵进行遍历，然后找到相应的1进行union操作即可。由于题目给到的是一个矩阵，并查集的建立需要数组
 * 所以我们需要建立的数组的大小是rows*cols那么大。同时我们还需要一个二维坐标到一维索引的转化，通过index函数去做到这一点，公式就是
 * cols * x + y。
 *
 * 因为我们直接通过下标转换去建立连通分量的，如果直接这么操作，我们没办法得知最终连通分量是1的分量到底有多少个。这里我们对并查集进行改造，
 * 多添加一个lands字段，lands是一个set，里头装的是连通分量是1的代表该分量的一维索引。然后我们也对union操作进行改造。具体做法是：
 * - 当我们进行并查集创建的时候，遍历一次矩阵，将矩阵所有为1的元素加入lands，意思是默认所有的1都是一个岛屿
 * - 当我们进行union操作的时候，我们找到big集合和small集合的时候，将big加入set，将small从set中删除
 * - 由于set具有去重性质，所以不需要管big是否重复加入，但是small已经没有成为岛屿的可能，如果在set中有就会被删除
 * - 重复这些操作，最后lands的大小一定是岛屿的数量
 */
