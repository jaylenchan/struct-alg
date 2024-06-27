class ListNode {
  public val: number
  public next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next)
    return head

  let cur = head.next.next
  let total = 2

  while (cur) {
    total++
    cur = cur.next
  }

  let [curHead, curTail, nextReverseNode] = reverseK(head, k)
  let times = (total - (total % k)) / k - 1

  while (nextReverseNode && times !== 0) {
    const [nextHead, nextTail, o1] = reverseK(nextReverseNode, k)
    curTail.next = nextHead
    curTail = nextTail
    nextReverseNode = o1
    times--
  }
  curTail.next = nextReverseNode

  return curHead
}

function reverseK(node: ListNode, k: number): [ListNode, ListNode, ListNode | null] {
  if (k === 1) {
    return [node, node, node.next]
  }

  let [head, tail, oldNext] = reverseK(node.next!, --k)
  tail.next = node
  node.next = null
  tail = node

  return [head, tail, oldNext]
}
// @lc code=end

export { reverseKGroup }
