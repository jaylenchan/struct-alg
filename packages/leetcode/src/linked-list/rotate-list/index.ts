/*
 * @lc app=leetcode.cn id=61 lang=typescript
 * @lcpr version=30204
 *
 * [61] 旋转链表
 */
class ListNode {
  public val: number
  public next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// @lcpr-template-start

// @lcpr-template-end
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
  if (!head || !head.next)
    return head

  let count = 1

  let cur: any = head
  while (cur.next !== null) {
    count++
    cur = cur.next
  }
  k %= count
  if (k === 0)
    return head

  cur.next = head

  for (let i = 0; i < count - k; i++) {
    cur = cur.next
  }
  const newHead = cur.next
  cur.next = null
  return newHead
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2]\n4\n
// @lcpr case=end

 */
export { rotateRight }
