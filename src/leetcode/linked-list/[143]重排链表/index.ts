class ListNode {
  public val: number
  public next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
// 获取链表的中点（偶数返回上中点）
function getMidNode(head: ListNode | null): ListNode | null {
  let slow = head
  let fast = head

  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow!.next
  }

  return slow
}

// 反转链表，返回新链表的头部和尾部
function reverseList(node: ListNode): [ListNode, ListNode | null] {
  if (node.next == null) {
    return [node, node]
  }

  // eslint-disable-next-line prefer-const
  let [head, tail] = reverseList(node.next)

  node.next = null
  tail!.next = node
  tail = node

  return [head, tail]
}

function reorderList(head: ListNode | null): void {
  // #0.特判：链表节点少于2个，不进行任何操作
  if (head == null || head.next == null) return

  // #1. 找到链表中点mid，取出链表中点的下一个节点midNext。
  const midNode = getMidNode(head)
  const midNodeNext = midNode!.next

  // #2. 将链表从中点mid处断开，形成两条短链表
  midNode!.next = null

  // #3. 对新链表midNext进行反转，获得反转后的新头节点
  const [head1] = reverseList(midNodeNext!)

  // #4. 从两段链表的头部开始，依次将新链表的每个节点插入第一条链表的节点之间
  // 1->2 4->3
  // h:1 || h1:4
  let h = head
  let h1 = head1
  while (h != null && h1 != null) {
    const oldNext = h.next
    const oldNext1 = h1.next

    h.next = h1
    h1.next = oldNext

    h = oldNext!
    h1 = oldNext1!
  }
}
// @lc code=end

export { reorderList }
