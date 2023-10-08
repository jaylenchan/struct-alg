import type { GNode } from 'tsalg/structures'

export function breadthFirstSearch(node: GNode): number[] {
  const ans: number[] = []

  if (node == null) return ans

  const queue: GNode[] = []
  const visited = new Set<GNode>()

  queue.push(node)
  visited.add(node)

  while (queue.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const curNode = queue.shift()!
    // 广度优先处理节点：从队列中弹出就处理当前节点
    ans.push(curNode.value)

    for (const nextNode of curNode.nexts) {
      if (!visited.has(nextNode)) {
        queue.push(nextNode)
        visited.add(nextNode)
      }
    }
  }

  return ans
}
