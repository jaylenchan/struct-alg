/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 */
export { swapPairs }
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
function reverseList(
  node: ListNode,
  num: number
): [ListNode, ListNode, ListNode | null] {
  if (num == 1 || node.next == null) {
    return [node, node, node.next]
  }

  // eslint-disable-next-line prefer-const
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
  // eslint-disable-next-line prefer-const
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
  if (head == null || head.next == null) return head

  head = _swapPairs(head)

  return head
}
// @lc code=end
/**
 * #思路#
 * 1. 由于经过特判，所以链表至少有两个节点。
 * 2. 对这两个节点先进行一次反转，获得反转后区间的头部和尾部，以及下一次反转的起始点
 * 3. 循环判断下一次反转的起始点是否存在，存在的话按照如下操作：
 *    1 以下一次反转起点作为起始点，进行链表的两两反转操作
 *    2 将上一次反转的tail的next指向这一次反转的区间的头部newHead(因为链表在反转的时候，我的操作是直接断开，成为单独一个链表小段)
 *    3 更新下一次反转的起始点oldNext为这一次反转后获得的nextOldNext
 *    4 更新新的tail在哪里，tail = nextTail，就是将上次的tail跳到这一次反转的tail处，以便下一次的时候需要他做过程2操作
 * 4. 循环结束，返回整个链表的头节点
 */
