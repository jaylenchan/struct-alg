export interface ITrie {
  /** 获得Trie中存储的单词数量 */
  getSize: () => number
  /** 向Trie当中添加一个新的单词 */
  insert: (word: string) => void
  /** 查询单词word是否在Trie当中 */
  contains: (word: string) => boolean
  /** 查询在Trie当中是否有以prefix为前缀的单词 */
  isPrefix: (prefix: string) => boolean
}
