/*
 * @lc app=leetcode.cn id=200 lang=typescript
 * @lcpr version=30204
 *
 * [200] 岛屿数量
 */

// @lcpr-template-start

// @lcpr-template-end
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

      this.lands.add(big)
      this.lands.delete(small)

      this._parent[small] = big
      this._size[big] = ISetSize + JSetSize
      this.sets--
    }
  }
}

function numIslands(grid: string[][]): number {
  if (grid.length === 0 || grid[0].length === 0)
    return 0

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
      if (grid[i][j] === '1')
        uf.lands.add(index(cols, i, j))
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        for (const [offsetX, offsetY] of positions) {
          const newX = i + offsetX
          const newY = j + offsetY
          if (inArea(rows, cols, newX, newY) && grid[newX][newY] === '1') {
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

/*
// @lcpr case=start
// [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]\n
// @lcpr case=end

// @lcpr case=start
// [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]\n
// @lcpr case=end

 */
export { numIslands }
