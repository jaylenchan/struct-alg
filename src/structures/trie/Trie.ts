import type { ITrie } from './type'

class TrieNode {
  public isWord: boolean
  public next: Map<string, TrieNode>

  constructor(isWord?: boolean) {
    this.isWord = isWord ?? false
    this.next = new Map<string, TrieNode>()
  }
}

export class Trie implements ITrie {
  private _root: TrieNode
  private _size: number

  constructor() {
    this._root = new TrieNode()
    this._size = 0
  }

  public getSize(): number {
    return this._size
  }

  public insert(word: string): void {
    let cur = this._root

    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      if (!cur.next.get(char)) {
        cur.next.set(char, new TrieNode())
      }
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      cur = cur.next.get(char)!
    }

    if (!cur.isWord) {
      cur.isWord = true
      this._size += 1
    }
  }

  public contains(word: string): boolean {
    let cur = this._root

    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      if (!cur.next.get(char)) {
        return false
      }
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      cur = cur.next.get(char)!
    }

    return cur.isWord
  }

  public isPrefix(prefix: string): boolean {
    let cur = this._root

    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i]

      if (!cur.next.get(char)) {
        return false
      }

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      cur = cur.next.get(char)!
    }

    return true
  }
}
