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
