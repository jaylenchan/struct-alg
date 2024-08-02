export interface IMap<K, V> {
  // 添加元素
  add: (k: K, v: V) => void
  // 删除元素
  remove: (k: K) => V | null
  // 包含元素
  contains: (k: K) => boolean
  get: (k: K) => V | null
  set: (k: K, v: V) => void
  getSize: () => number
  isEmpty: () => boolean
}
