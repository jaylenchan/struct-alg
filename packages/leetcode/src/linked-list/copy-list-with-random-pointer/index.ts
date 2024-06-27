/*
 * @lc app=leetcode.cn id=138 lang=typescript
 * @lcpr version=30204
 *
 * [138] 随机链表的复制
 */
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
// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
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

  while (cur !== null) {
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

  while (cur !== null) {
    const old = newOldMap.get(cur)!
    const oldRandom = oldRandomMap.get(old)

    const newRandom = oldNewMap.get(oldRandom!)!

    cur.random = newRandom

    cur = cur.next
  }

  return dummy.next
}
// @lc code=end

/*
// @lcpr case=start
// [[7,null],[13,0],[11,4],[10,2],[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[2,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[3,null],[3,0],[3,null]]\n
// @lcpr case=end

 */
export { copyRandomList }
