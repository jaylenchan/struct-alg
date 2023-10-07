import type { Graph, GNode } from 'tsalg/structures'

/**
 * 拓扑排序
 * @param graph  一张有向无环图（必须是！）
 */
function topologicalSort(graph: Graph): GNode[] {
  /**
   * inMap表用来存放某一个节点跟该节点的入度之间的映射
   */
  const inMap = new Map<GNode, number>()

  // 只有入度为0的GNode才能放进来这个队列
  const zeroInQueue: GNode[] = []

  // 枚举图中的所有节点
  for (const gNode of graph.nodes.values()) {
    // 刚开始，初始化inMap表，让每个gNode跟他们的入度形成映射
    inMap.set(gNode, gNode.in)
    // 因为给到的一定是一张有向无环图，那么一定有一批入度为0的点
    if (gNode.in == 0) {
      zeroInQueue.push(gNode) // 入队
    }
  }

  const ans: GNode[] = []

  while (zeroInQueue.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const delNode = zeroInQueue.shift()!
    ans.push(delNode)

    // 枚举删除的当前节点的所有直接邻居
    for (const nextNode of delNode.nexts) {
      // 让所有直接邻居的入度-1（原因是该节点删除后，指向邻居的边逻辑上就消失了）
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const inNum = inMap.get(nextNode)! - 1
      inMap.set(nextNode, inNum)
      // 如果删除后inNum入度也变成0了，那么让邻居也进入zeroInQueue队列中
      if (inNum == 0) {
        zeroInQueue.push(nextNode)
      }
    }
  }

  return ans
}

export default topologicalSort
