class Node {
  public val: number
  public next: Node | null
  public random: Node | null
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.random = random === undefined ? null : random
  }
}

/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
  const oldRandomMap = new Map<Node, Node>()
  const oldNewMap = new Map<Node, Node>()
  const newOldMap = new Map<Node, Node>()

  const dummy = new Node(-1)

  let cur = head
  let tail = dummy

  while (cur != null) {
    const copyNode = new Node(cur.val)
    tail.next = copyNode
    tail = copyNode

    oldRandomMap.set(cur, cur.random!)
    oldNewMap.set(cur, copyNode)
    newOldMap.set(copyNode, cur)
    cur = cur.next
  }

  cur = dummy.next

  // 先找到当前新节点曾经对应的旧节点：new -> old
  // 先找旧的节点的随机节点 ： old -> old-random
  // 再找这个旧随机节点对应的copy节点是谁 oldrandom -> copyRandom(copyNode)
  // 然后让新的当前节点指向新的随机copy节点 new
  cur = dummy.next

  while (cur != null) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const old = newOldMap.get(cur)!
    const oldRandom = oldRandomMap.get(old)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const newRandom = oldNewMap.get(oldRandom!)!

    cur.random = newRandom

    cur = cur.next
  }

  return dummy.next
}

// @lc code=end

export { copyRandomList }
