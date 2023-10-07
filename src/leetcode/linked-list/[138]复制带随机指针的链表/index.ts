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

    oldRandomMap.set(cur, cur.random)
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
    const newRandom = oldNewMap.get(oldRandom)!

    cur.random = newRandom

    cur = cur.next
  }

  return dummy.next
}

/**
 * 思路：使用三张表记住节点之间的关系
 * 首先不去管随机指针，正常克隆一条链表
 * 然后我们才来对新链表进行随机指针设置：
 * 1. 先找到当前新节点曾经对应的旧节点：new -> old
 * 2. 先找旧的节点的随机节点 ： old -> old-random
 * 3. 再找这个旧随机节点对应的copy节点是谁 oldrandom -> copyRandom(copyNode)
 * 4. 然后让新的当前节点指向新的随机copy节点 new
 *
 * 关键点：新的随机指针指向的节点，本身也是新链表的节点。旧的随机指针指向的节点，本身也是旧随机链表的节点。
 * 我们在克隆的时候，先记录住旧到新之间的映射
 * 因此，我们就需要遍历新链表，从新节点出发，去找到旧的节点。找到后，我们就可以知道旧的节的随机指针指向的是哪个节点。
 * 我们只需要知道指向的这个旧随机节点一定是可以通过旧到新的映射找到新节点中对应的是哪个节点。此时我们直接将当前指针
 * 指向这个找到的节点即可
 */
// @lc code=end

export default copyRandomList
