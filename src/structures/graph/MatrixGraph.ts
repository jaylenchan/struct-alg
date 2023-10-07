import { Graph, GNode, Edge } from './Graph'

/**
 * 创建图
 * @param matrix N*3的矩阵
 * [
 *   [weight, from, to],
 *   [weight, from, to]
 * ]
 */

export class MatrixGraph extends Graph {
  public createGraph(matrix: number[][]): void {
    if (matrix.length == 0 || matrix[0].length == 0) {
      return
    }

    for (const [weight, from, to] of matrix) {
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
      const newEdge = new Edge(weight, fromNode, toNode)

      fromNode.nexts.push(toNode)
      fromNode.out += 1
      toNode.in += 1
      fromNode.edges.push(newEdge)
      this.edges.add(newEdge)
    }
  }
}
