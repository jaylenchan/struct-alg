/*
 * @lc app=leetcode.cn id=328 lang=typescript
 * @lcpr version=30204
 *
 * [328] 奇偶链表
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

/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,3,5,6,4,7]\n
// @lcpr case=end

 */
export { oddEvenList }
