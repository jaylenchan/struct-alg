class ListNode {
  public val: number
  public next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/*
 * @lc app=leetcode.cn id=328 lang=typescript
 *
 * [328] 奇偶链表
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

function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null)
    return head

  let odd = head
  const even = head.next
  let curEven = even

  // 1 -> 3 2 -> 4 -> 5
  while (curEven.next && curEven.next.next) {
    const nextOdd = curEven.next
    odd.next = nextOdd
    odd = nextOdd

    const nextEven = curEven.next.next
    curEven.next = nextEven
    curEven = nextEven
  }
  if (curEven.next) {
    odd.next = curEven.next
    curEven.next = null
    odd = odd.next
  }

  if (even)
    odd.next = even

  return head
}
// @lc code=end

export { oddEvenList }
