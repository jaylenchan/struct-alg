/*
 * @lc app=leetcode.cn id=210 lang=typescript
 *
 * [210] 课程表 II
 */
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

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const fromNode = this.nodes.get(from)!
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const toNode = this.nodes.get(to)!
      const newEdge = new Edge(0, fromNode, toNode)

      fromNode.out++
      toNode.in++

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      fromNode.edges.add(newEdge)
      this.edges.add(newEdge)

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      fromNode.nexts.add(toNode)
    }
  }

}

function topologicalSort(graph: Graph): number[] {
  const inMap = new Map<GNode, number>()
  const zeroInQueue: GNode[] = []

  for (const node of graph.nodes.values()) {
    inMap.set(node, node.in)

    if (node.in == 0) {
      zeroInQueue.push(node)
    }
  }

  const ans: number[] = []
  while (zeroInQueue.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const gNode = zeroInQueue.shift()!
    ans.push(gNode.value)
    for (const node of gNode.nexts) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      let count = inMap.get(node)!
      inMap.set(node, --count)

      if (count == 0) {
        zeroInQueue.push(node)
      }
    }
  }

  return ans
}

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  if (prerequisites.length == 0) {
    return new Array(numCourses).fill(0).map((_, index) => index)
  }

  const graph = new Graph(prerequisites)

  const orders = topologicalSort(graph)

  if (orders.length != graph.nodes.size) return []

  for (let i = 0; i < numCourses; i++) {
    if (!graph.nodes.has(i)) {
      orders.push(i)
    }
  }
  return orders
}
// @lc code=end

export default findOrder

/**
 * 思路：图 + 拓扑排序
 * 1. 根据题意，有依赖的课程数组可以看成一个有向图（至于图是不是有环，需要通过拓扑排序得结果）
 * 2. 进行建图操作，将题目给的图数据转换成熟悉的图结构
 * 3. 利用建立的图进行拓扑排序
 * 4. 将拓扑排序得结果跟图的节点进行比较，大小一致说明拓扑排序完全，否则说明有环
 * 5. 如果有环，说明有的课程循环依赖，没法进行完成所有课程，代码表现就是排序结果大小跟图节点不一致，直接返回false；
 * 6. 遍历课程数，如果图节点不包含这门课程，说明不具有依赖这个课程，添加到orders尾部即可（题目说了不限制正确顺序）
 * 7. 返回orders数组，这就是课程顺序
 * 8. 特判：如果没有依赖课程，直接遍历numCourses，返回课程数组即可（代码中第一段的特判）
 */
