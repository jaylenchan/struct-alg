/*
 * @lc app=leetcode.cn id=211 lang=typescript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
/** 根据ascii码返回相对a的偏移索引 */
function ascToIndex(ch: string): number {
  return ch.charCodeAt(0) - 'a'.charCodeAt(0)
}

class TrieNode {
  public pass: number
  public end: number
  public nexts: TrieNode[]

  constructor() {
    this.pass = 0
    this.end = 0
    this.nexts = []
  }
}

class WordDictionary {
  private _root: TrieNode

  constructor() {
    this._root = new TrieNode()
  }

  public addWord(word: string): void {
    let node = this._root
    node.pass++

    for (const char of word) {
      const index = ascToIndex(char)

      if (!node.nexts[index]) {
        node.nexts[index] = new TrieNode()
      }

      node.nexts[index].pass++
      node = node.nexts[index]
    }

    node.end++
  }

  public search(word: string): boolean {
    let node = this._root

    for (let i = 0; i < word.length; i++) {
      const char = word[i]

      if (char === '.')
        return this._fuzzySearch(word, i, node)

      const index = ascToIndex(char)

      if (!node.nexts[index]) {
        return false
      }

      node = node.nexts[index]
    }

    return node.end > 0
  }

  private _fuzzySearch(word: string, cur: number, node: TrieNode): boolean {
    if (cur === word.length)
      return node.end > 0

    // acdb -> ..ab
    // 如果当前字符不为.，跟正常的trie搜索一样
    while (word[cur] !== '.') {
      const index = ascToIndex(word[cur])

      if (!node.nexts[index]) {
        return false
      }

      node = node.nexts[index]

      if (++cur === word.length)
        return node.end > 0
    }

    // a.b.c
    // 否则此时直接遍历所有当前node的next，跟通配符.进行匹配，任意一个字符都匹配，然后进入下一轮fuzzySearch接下来的字符
    for (let i = 0; i < node.nexts.length; i++) {
      if (node.nexts[i] && this._fuzzySearch(word, cur + 1, node.nexts[i]))
        return true
    }

    return false
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

export { WordDictionary }
