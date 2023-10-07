/*
 * @lc app=leetcode.cn id=208 lang=typescript
 *
 * [208] 实现 Trie (前缀树)
 */
export { Trie }
// @lc code=start
function ASCIndex(letter: string): number {
  if (
    letter.charCodeAt(0) - 'a'.charCodeAt(0) < 0 ||
    letter.charCodeAt(0) - 'a'.charCodeAt(0) > 25
  )
    return 0

  return letter.charCodeAt(0) - 'a'.charCodeAt(0)
}

class TrieNode {

  public pass: number
  public end: number
  public nexts: TrieNode[]

  constructor() {
    this.pass = 0
    this.end = 0
    this.nexts = new Array(26).fill(null)
  }

}
class Trie {

  private _root: TrieNode
  constructor() {
    this._root = new TrieNode()
  }

  public insert(word: string): void {
    let node = this._root
    node.pass += 1

    for (const letter of word) {
      const index = ASCIndex(letter)

      if (node.nexts[index] == null) {
        node.nexts[index] = new TrieNode()
      }

      // 更新信息 curNode.pass++,
      node.nexts[index].pass += 1
      node = node.nexts[index]
    }
    // 最后一个字符节点代表这个字符串结尾，需要end++
    node.end += 1
  }

  public search(word: string): boolean {
    let node = this._root

    for (const letter of word) {
      const index = ASCIndex(letter)

      if (node.nexts[index] == null) return false

      node = node.nexts[index]
    }

    return node.end > 0
  }

  public startsWith(prefix: string): boolean {
    let node = this._root

    for (const letter of prefix) {
      const index = ASCIndex(letter)

      if (node.nexts[index] == null) return false

      node = node.nexts[index]
    }

    return node.pass > 0
  }

}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
