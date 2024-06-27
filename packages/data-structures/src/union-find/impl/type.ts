export interface IUnionFind<V> {
  /** 查看元素p和元素q是否所属同一个集合 */
  isConnected: (p: V, q: V) => boolean
  /** 合并元素p所在集合和元素q所在集合合并到一块 */
  union: (p: V, q: V) => void
  /** 查找元素p所对应的集合的编号（或者说查找元素p所在集合的代表元素） */
  find: (p: V) => number
}
