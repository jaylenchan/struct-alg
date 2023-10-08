class ListNode {
  public val: number
  public next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) return head

  let count = 1
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cur: any = head
  while (cur.next != null) {
    count++
    cur = cur.next
  }
  k %= count
  if (k == 0) return head

  cur.next = head

  for (let i = 0; i < count - k; i++) {
    cur = cur.next
  }
  const newHead = cur.next
  cur.next = null
  return newHead
}
// @lc code=end

export default rotateRight
