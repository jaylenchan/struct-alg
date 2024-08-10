/*
 * @lc app=leetcode.cn id=234 lang=typescript
 * @lcpr version=30204
 *
 * [234] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
  if (head === null)
    return false
  const stack = []
  let cur: any = head

  while (cur !== null) {
    stack.push(cur)
    cur = cur.next
  }

  while (head !== null) {
    const node = stack.pop()
    if (node!.val !== head.val) {
      return false
    }
    head = head.next
  }

  return true
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */
export { isPalindrome }
