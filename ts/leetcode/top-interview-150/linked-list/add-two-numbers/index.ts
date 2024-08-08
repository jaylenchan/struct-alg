/*
 * @lc app=leetcode.cn id=2 lang=typescript
 * @lcpr version=30204
 *
 * [2] 两数相加
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1)
    return l2;

  if (!l2)
    return l1;

  const dummy = new ListNode(-1);
  let tail = dummy;
  let curry = 0

  while (l1 || l2) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + curry;
    const val = sum % 10;
    curry = Math.floor(sum / 10);

    tail.next = new ListNode(val);
    tail = tail.next;

    if (l1)
      l1 = l1.next;
    if (l2)
      l2 = l2.next;
  }

  if (curry > 0) {
    tail.next = new ListNode(curry);
  }

  return dummy.next
};
// @lc code=end

/*
// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

// @lcpr case=start
// [9,9,9,9,9,9,9]\n[9,9,9,9]\n
// @lcpr case=end

 */

export const add_two_numbers = { addTwoNumbers }
