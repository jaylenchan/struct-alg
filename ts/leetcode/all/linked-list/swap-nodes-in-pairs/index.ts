/*
 * @lc app=leetcode.cn id=24 lang=typescript
 * @lcpr version=30204
 *
 * [24] 两两交换链表中的节点
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

// 反转链表的两个节点，并且返回新区间的头部和尾部，以及旧尾部节点的下一个节点（需要这个是因为他是下一次反转的起始点）
function reverseList(node: ListNode, num: number): [ListNode, ListNode, ListNode | null] {
  if (num === 1 || node.next === null) {
    return [node, node, node.next]
  }

  let [head, tail, oldNext] = reverseList(node.next, num - 1)
  tail.next = node
  node.next = null
  tail = node

  return [head, tail, oldNext]
}

// 两两交换链表的节点，并返回交换后链表的头节点
function _swapPairs(node: ListNode): ListNode {
  // 1 2 3 4
  // 2 1  head: 2 tail: 1
  // 4 ,3

  let [head, tail, oldNext] = reverseList(node, 2)

  while (oldNext) {
    const [nextHead, nextTail, nextOldNext] = reverseList(oldNext, 2)
    tail.next = nextHead
    oldNext = nextOldNext
    tail = nextTail
  }

  return head
}

function swapPairs(head: ListNode | null): ListNode | null {
  // #特判：节点个数小于2，直接返回
  if (head === null || head.next === null)
    return head

  head = _swapPairs(head)

  return head
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
export { swapPairs }
