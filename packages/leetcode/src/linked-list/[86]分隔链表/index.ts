class ListNode {
  public val: number
  public next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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

function partition(head: ListNode | null, x: number): ListNode | null {
  if (head === null)
    return null

  const less = []
  const more = []
  while (head !== null) {
    if (head.val < x) {
      less.push(head)
    }
    else {
      more.push(head)
    }
    head = head.next
  }

  const dummyHead = new ListNode(-1)
  let cur = dummyHead
  for (let i = 0; i < less.length; i++) {
    less[i].next = null
    cur.next = less[i]
    cur = cur.next
  }

  for (let j = 0; j < more.length; j++) {
    more[j].next = null
    cur.next = more[j]
    cur = cur.next
  }

  return dummyHead.next
}
// @lc code=end

export { partition }
