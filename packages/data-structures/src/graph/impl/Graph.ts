/** 图的边 */
export class Edge {
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
export class GNode {
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
