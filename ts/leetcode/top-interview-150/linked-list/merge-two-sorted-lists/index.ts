/*
 * @lc app=leetcode.cn id=21 lang=typescript
 * @lcpr version=30204
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1)
    return list2;
  if (!list2)
    return list1;

  const dummy = new ListNode(-1)
  let tail = dummy;

  let loc1: ListNode | null = list1;
  let loc2: ListNode | null = list2;

  while (loc1 && loc2) {
    if (loc1.val < loc2.val) {
      tail.next = loc1;
      loc1 = loc1.next;
    }
    else {
      tail.next = loc2;
      loc2 = loc2.next;
    }

    tail = tail.next;
  }

  while (loc1) {
    tail.next = loc1;
    loc1 = loc1.next;
    tail = tail.next;
  }

  while (loc2) {
    tail.next = loc2;
    loc2 = loc2.next;
    tail = tail.next;
  }

  return dummy.next;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,4]\n[1,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n[]\n
// @lcpr case=end

// @lcpr case=start
// []\n[0]\n
// @lcpr case=end

 */

export const merge_two_sorted_lists = { mergeTwoLists }
