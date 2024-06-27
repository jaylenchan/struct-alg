/*
 * @lc app=leetcode.cn id=207 lang=typescript
 * @lcpr version=30204
 *
 * [207] 课程表
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
class Edge {
  /** 边的权重 */
  public weight: number
  public from: GNode
  public to: GNode

  constructor(weight: number, from: GNode, to: GNode) {
    this.weight = weight
    this.from = from
    this.to = to
  }
}

/** 图的节点 */
class GNode {
  /** 点的编号|值 */
  public value: number
  // 当前节点的入度
  public in: number
  // 当前节点的出度
  public out: number
  // 从当前节点出发的能够到达的所有节点的集合
  public nexts: GNode[]
  // 从当前节点出发经过的所有边的集合
  public edges: Edge[]

  constructor(value: number) {
    this.value = value
    this.in = 0
    this.out = 0
    this.nexts = []
    this.edges = []
  }
}

/** 图：点集 + 边集 */
class Graph {
  /** 点集 */
  public nodes: Map<number, GNode>
  /** 边集 */
  public edges: Set<Edge>

  constructor(prerequisites: number[][]) {
    this.nodes = new Map<number, GNode>()
    this.edges = new Set<Edge>()

    this.createGraph(prerequisites)
  }

  /** 接收一个图的其他表示结构，转换成自己熟悉的这种图结构 */
  public createGraph(prerequisites: number[][]): void {
    for (const [to, from] of prerequisites) {
      if (!this.nodes.has(from)) {
        this.nodes.set(from, new GNode(from))
      }

      if (!this.nodes.has(to)) {
        this.nodes.set(to, new GNode(to))
      }

      const fromNode = this.nodes.get(from)!

      const toNode = this.nodes.get(to)!

      const newEdge = new Edge(0, fromNode, toNode)

      fromNode.nexts.push(toNode)
      fromNode.edges.push(newEdge)
      fromNode.out += 1
      toNode.in += 1
      this.edges.add(newEdge)
    }
  }
}

function topologicalSort(graph: Graph): number[] {
  // 存放节点 -> 节点入度
  const inMap = new Map<GNode, number>()
  // 存放入度为0的GNode
  const zeroInQueue: GNode[] = []

  // 枚举图中的节点
  for (const gNode of graph.nodes.values()) {
    // 初始化inMap
    inMap.set(gNode, gNode.in)

    if (gNode.in === 0) {
      zeroInQueue.push(gNode)
    }
  }

  const ans: number[] = []

  // 枚举所有入度为0的节点
  while (zeroInQueue.length > 0) {
    // 删除节点

    const node = zeroInQueue.shift()!
    ans.push(node.value)
    // 枚举节点的邻居
    for (const nextNode of node.nexts) {
      // 所有邻居入度减去1

      const inDegree = inMap.get(nextNode)! - 1
      inMap.set(nextNode, inDegree)

      if (inDegree === 0) {
        zeroInQueue.push(nextNode)
      }
    }
  }

  return ans
}

function canFinish(_numCourses: number, prerequisites: number[][]): boolean {
  if (prerequisites.length === 0)
    return true

  const graph = new Graph(prerequisites)

  const order = topologicalSort(graph)

  return order.length === graph.nodes.size
}
// @lc code=end

/*
// @lcpr case=start
// 2\n[[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// 2\n[[1,0],[0,1]]\n
// @lcpr case=end

 */
export { canFinish }
