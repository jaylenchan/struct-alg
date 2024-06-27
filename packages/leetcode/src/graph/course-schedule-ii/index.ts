/*
 * @lc app=leetcode.cn id=210 lang=typescript
 * @lcpr version=30204
 *
 * [210] 课程表 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
class GNode {
  public value: number
  public in: number
  public out: number
  public edges: Set<Edge>
  public nexts: Set<GNode>
  constructor(value: number) {
    this.value = value
    this.in = 0
    this.out = 0
    this.edges = new Set<Edge>()
    this.nexts = new Set<GNode>()
  }
}

class Edge {
  public weight: number
  public from: GNode
  public to: GNode

  constructor(weight: number, from: GNode, to: GNode) {
    this.weight = weight
    this.from = from
    this.to = to
  }
}

class Graph {
  public nodes: Map<number, GNode>
  public edges: Set<Edge>

  constructor(matrix: number[][]) {
    this.nodes = new Map<number, GNode>()
    this.edges = new Set<Edge>()
    this.createGraph(matrix)
  }

  public createGraph(nums: number[][]): void {
    for (const [to, from] of nums) {
      if (!this.nodes.has(from)) {
        this.nodes.set(from, new GNode(from))
      }

      if (!this.nodes.has(to)) {
        this.nodes.set(to, new GNode(to))
      }

      const fromNode = this.nodes.get(from)!

      const toNode = this.nodes.get(to)!
      const newEdge = new Edge(0, fromNode, toNode)

      fromNode.out++
      toNode.in++

      fromNode.edges.add(newEdge)
      this.edges.add(newEdge)

      fromNode.nexts.add(toNode)
    }
  }
}

function topologicalSort(graph: Graph): number[] {
  const inMap = new Map<GNode, number>()
  const zeroInQueue: GNode[] = []

  for (const node of graph.nodes.values()) {
    inMap.set(node, node.in)

    if (node.in === 0) {
      zeroInQueue.push(node)
    }
  }

  const ans: number[] = []
  while (zeroInQueue.length > 0) {
    const gNode = zeroInQueue.shift()!
    ans.push(gNode.value)
    for (const node of gNode.nexts) {
      let count = inMap.get(node)!
      inMap.set(node, --count)

      if (count === 0) {
        zeroInQueue.push(node)
      }
    }
  }

  return ans
}

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  if (prerequisites.length === 0) {
    return new Array(numCourses).fill(0).map((_, index) => index)
  }

  const graph = new Graph(prerequisites)

  const orders = topologicalSort(graph)

  if (orders.length !== graph.nodes.size)
    return []

  for (let i = 0; i < numCourses; i++) {
    if (!graph.nodes.has(i)) {
      orders.push(i)
    }
  }
  return orders
}
// @lc code=end

/*
// @lcpr case=start
// 2\n[[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// 4\n[[1,0],[2,0],[3,1],[3,2]]\n
// @lcpr case=end

// @lcpr case=start
// 1\n[]\n
// @lcpr case=end

 */
export { findOrder }
