import { ASCIndex } from '@tsalg/shared'

import type { ITrie } from './type'

export class TrieNode {
  // 表示该节点到达过多少次
  public pass: number
  // 表示该节点是多少个字符串的结尾节点
  public end: number
  // 表示该节点的下一级的所有节点集合
  // 注意：表达一条路有无，在代码上是通过下级nexts有无存在这个节点来表示的。有这个节点，说明有到这个节点的路
  public nexts: TrieNode[]

  constructor() {
    // 根节点的pass的值其实就是有多少个字符串加入了Trie中
    // 或者说有多少个空串加入了Trie中
    this.pass = 0
    this.end = 0
    // 如果从本节点出发，试图寻找nexts中的节点，发现找到的位置的元素是null
    // 说明并没有走向找到位置的节点的路
    // 比如：this.nexts[0] === null 说明没有走向a的路
    this.nexts = new Array(16).fill(null)
  }
}

export default class Trie implements ITrie {
  private _root: TrieNode

  constructor() {
    this._root = new TrieNode()
  }

  public getSize(): number {
    return this._root.pass
  }

  public insert(word: string): void {
    let node = this._root
    // 可以假想，一开始加入的是一个空串。
    node.pass += 1 // 从根节点出发，pass + 1

    // 依次从左往右遍历字符串word的每个字符
    for (const letter of word) {
      // 用letter的ASCII码 - a的ASCII码获取到从a开始的相对偏移索引
      // 比如'a'.charCodeAt(0) - 'a'.charCodeAt(0) = 0  a本身相对自己就是0偏移
      // 用这个偏移量就可以对应上nexts数组中的索引
      // 如果从node出发到这个字符节点的路为空，就建立起这条路
      if (node.nexts[ASCIndex(letter)] === null) {
        node.nexts[ASCIndex(letter)] = new TrieNode()
      }
      // 于是到这个地方，说明肯定有到本字符节点的路，因此更新下相关信息
      node.nexts[ASCIndex(letter)].pass += 1

      node = node.nexts[ASCIndex(letter)]
    }

    // 只有来到了最后一个字符节点，end才加1
    node.end += 1
  }

  // 查询一个word之前加入过几次Trie
  public search(word: string): number {
    if (word === null)
      return 0

    let node = this._root

    for (const letter of word) {
      /**
       * 如果说遍历字符串节点的时候，发现在某个letterNode往下并没有节点了，或者说到下一节点的路了，
       * 这时候说明word压根就没加入过，直接返回0，不需要再费力往下遍历了
       */
      if (node.nexts[ASCIndex(letter)] === null) {
        return 0
      }

      node = node.nexts[ASCIndex(letter)]
    }

    return node.end
  }

  // 所有加入的字符串中，有多少个字符串是以prefix作为前缀的
  public prefixNumber(prefix: string): number {
    if (prefix === null) {
      return 0
    }

    let node = this._root

    for (const letter of prefix) {
      if (node.nexts[ASCIndex(letter)] === null) {
        return 0
      }

      node = node.nexts[ASCIndex(letter)]
    }

    return node.pass
  }

  public contains(word: string): boolean {
    if (word === null)
      return false

    const node = this._root

    for (const letter of word) {
      if (node.nexts[ASCIndex(letter)] === null) {
        return false
      }
    }

    return node.end > 0
  }

  public isPrefix(prefix: string): boolean {
    return this.prefixNumber(prefix) > 0
  }

  public delete(word: string): void {
    // 确认一个字符串加入过Trie删除操作才有意义
    if (this.contains(word)) {
      let node = this._root
      node.pass -= 1

      for (const letter of word) {
        node.nexts[ASCIndex(letter)].pass -= 1

        // 如果在某个特殊场景 ，pass在某个节点就已经减1后成为0了，此时也不需要再费劲查看接下来的节点了
        // 因为都没有到达curLetterNode的路了，curLetterNode之后搭建的路也没用了
        // 此时直接将curLeeterNode设置为null，释放掉curLetterNode以及其之后的节点
        if (node.nexts[ASCIndex(letter)].pass === 0) {
          // 其实能进入这个逻辑的情况就是比如word的所有字符节点在Trie就加入了一次，那么到w的时候，根本不需要ord的遍历，直接将w置空即可
          let delNode: TrieNode | null = node.nexts[ASCIndex(letter)]

          delNode = null
          return
        }

        node = node.nexts[ASCIndex(letter)]
      }

      // end 能够-1的情况是字符节点可能有多个字符串是以这个字符作为结尾的
      node.end -= 1
    }
  }
}
