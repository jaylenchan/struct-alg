class ListNode {
  public val: number
  public next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
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

function sortList(head: ListNode | null): ListNode | null {
  if (head == null) return null

  const help: number[] = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cur: any = head
  while (cur != null) {
    help.push(cur.val)
    cur = cur.next
  }

  help.sort((a, b) => a - b)

  cur = head
  let i = 0
  while (cur != null) {
    cur.val = help[i]
    cur = cur.next
    i += 1
  }

  return head
}
// @lc code=end

export { sortList }
