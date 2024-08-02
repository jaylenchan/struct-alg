import type { Edge, GNode } from 'ts/structures/graph/common/graph'

/** 图：点集 + 边集 */
export class Graph {
  /** 点集 */
  public nodes: Map<number, GNode>
  /** 边集 */
  public edges: Set<Edge>

  constructor(..._args: unknown[]) {
    this.nodes = new Map<number, GNode>()
    this.edges = new Set<Edge>()

    this.createGraph(..._args)
  }

  /** 接收一个图的其他表示结构，转换成自己熟悉的这种图结构 */
  public createGraph(..._args: unknown[]): void {
    throw new Error('createGraph图的转换方法必须被实现！')
  }
}
