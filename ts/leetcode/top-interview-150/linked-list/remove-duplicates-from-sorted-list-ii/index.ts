/*
 * @lc app=leetcode.cn id=82 lang=typescript
 * @lcpr version=30204
 *
 * [82] 删除排序链表中的重复元素 II
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head?.next)
    return head;

  const dummy = new ListNode();
  dummy.next = head;

  let slow: ListNode | null = dummy.next;
  let fast: ListNode | null = dummy.next.next;

  const set = new Set<number>();

  while (slow && fast) {
    if (slow.val === fast.val) {
      set.add(fast.val);
    }

    slow = slow.next;
    fast = fast.next;
  }

  let cur = dummy;
  let tail = dummy;

  while (cur.next) {
    if (!set.has(cur.next.val)) {
      tail.next = cur.next;
      tail = tail.next;
    }

    cur = cur.next;
  }

  tail.next = cur.next;

  return dummy.next;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,3,4,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,2,3]\n
// @lcpr case=end

 */

export const remove_duplicates_from_sorted_list_ii = { deleteDuplicates }
