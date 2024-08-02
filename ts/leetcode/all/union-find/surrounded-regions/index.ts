/*
 * @lc app=leetcode.cn id=130 lang=typescript
 * @lcpr version=30204
 *
 * [130] 被围绕的区域
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
class UNode<V> {
  public value: V

  constructor(value: V) {
    this.value = value
  }
}

class UnionFind<V> {
  public nodes: Map<V, UNode<V>>
  public parents: Map<UNode<V>, UNode<V>>
  public sizes: Map<UNode<V>, number>

  constructor(values: V[]) {
    this.nodes = new Map<V, UNode<V>>()
    this.parents = new Map<UNode<V>, UNode<V>>()
    this.sizes = new Map<UNode<V>, number>()

    for (const value of values) {
      const node = new UNode(value)
      this.nodes.set(value, node)
      this.parents.set(node, node)
      this.sizes.set(node, 1)
    }
  }

  public isConnected(p: V, q: V): boolean {
    return this.find(p) === this.find(q)
  }

  public union(p: V, q: V): void {
    if (this.isConnected(p, q))
      return

    const rootP = this.find(p)
    const rootQ = this.find(q)

    const pSize = this.sizes.get(rootP)!
    const qSize = this.sizes.get(rootQ)!

    const bigger = pSize >= qSize ? rootP : rootQ
    const smaller = pSize < qSize ? rootP : rootQ

    this.parents.set(smaller, bigger)
    this.sizes.set(bigger, pSize + qSize)
    this.sizes.delete(smaller)
  }

  public find(p: V): UNode<V> {
    let node = this.nodes.get(p)!
    const path: UNode<V>[] = []

    while (node !== this.parents.get(node)) {
      path.push(node)
      node = this.parents.get(node)!
    }

    while (path.length > 0) {
      const cur = path.pop()!
      this.parents.set(cur, node)
    }

    return node
  }
}
/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  if (board.length === 0 || board[0].length === 0)
    return

  const rows = board.length
  const cols = board[0].length

  const arr = (Array.from({ length: rows * cols + 1 }).fill('dummy'))

  let index = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      arr[index++] = `${i}-${j}`
    }
  }
  const uf = new UnionFind(arr)

  for (let i = 0; i < rows; i++) {
    if (board[i][0] === 'O') {
      uf.union('dummy', `${i}-0`)
    }

    if (board[i][cols - 1] === 'O') {
      uf.union('dummy', `${i}-${cols - 1}`)
    }
  }

  for (let j = 0; j < cols; j++) {
    if (board[0][j] === 'O') {
      uf.union('dummy', `0-${j}`)
    }
    if (board[rows - 1][j] === 'O') {
      uf.union('dummy', `${rows - 1}-${j}`)
    }
  }

  const positions = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ]
  for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < cols - 1; j++) {
      if (board[i][j] === 'O') {
        for (const pos of positions) {
          const x = pos[0] + i
          const y = pos[1] + j

          if (board[x][y] === 'O') {
            uf.union(`${x}-${y}`, `${i}-${j}`)
          }
        }
      }
    }
  }

  for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < cols - 1; j++) {
      if (!uf.isConnected('dummy', `${i}-${j}`)) {
        board[i][j] = 'X'
      }
    }
  }
}
// @lc code=end

/*
// @lcpr case=start
// [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]\n
// @lcpr case=end

// @lcpr case=start
// [["X"]]\n
// @lcpr case=end

 */
export { solve }
