class ListNode {
  public val: number
  public next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) return head

  let cur = head.next.next
  let total = 2

  while (cur) {
    total++
    cur = cur.next
  }

  // eslint-disable-next-line prefer-const
  let [curHead, curTail, nextReverseNode] = reverseK(head, k)
  let times = (total - (total % k)) / k - 1

  while (nextReverseNode && times != 0) {
    const [nextHead, nextTail, o1] = reverseK(nextReverseNode, k)
    curTail.next = nextHead
    curTail = nextTail
    nextReverseNode = o1
    times--
  }
  curTail.next = nextReverseNode

  return curHead
}

function reverseK(node: ListNode, k: number): [ListNode, ListNode, ListNode | null] {
  if (k == 1) {
    return [node, node, node.next]
  }

  // eslint-disable-next-line prefer-const
  let [head, tail, oldNext] = reverseK(node.next!, --k)
  tail.next = node
  node.next = null
  tail = node

  return [head, tail, oldNext]
}
// @lc code=end

/**
 * #思路#
 * 本题的总体思路跟24题两两交换链表节点很像，不同得是本题要求的是k个一组反转，24题要求的是2个一组反转。
 * 另外本题还额外要求了不够剩余不够k个的话保持顺序。
 * 1. 解决不够k个保持顺序的问题：
 *    - 我们先遍历下链表，计算下总个数total
 *    - 用总个数total计算出按照k个一组去反转，总共能够反转几次，用times记录下来。（由于我们上来就反转了第一组k，所以我们的times实际上表示还剩下几次能够反转）
 *    - 因此，我们的策略是不断地对某个区间反转k个，当times等于0的时候停止反转。
 *    - 最后我们让剩下的没反转的片段直接连在链表末尾即可。
 * 2. 算法具体步骤：
 *    - 特判：我们设定链表的节点至少有两个才能进行反转，否则少于2个的情况下，直接返回链表头结点
 *    - 当逻辑走过特判之后，我们能够确定的是此时的链表至少有2个节点。于是我们用一个变量cur记录第二个节点的下一个位置，total初始化为2
 *    - 计算节点总数：当cur存在，我们不断的更新total总数，直到cur为空
 *    - 我们定义函数reverseK的作用是传入下一个需要反转的片段的第一个节点以及需要反转几个节点，它就能够帮我们翻转这个片段的节点，然后给我们返回反转后片段的头节点，尾节点以及下一段需要反转的片段的第一个节点。
 *      现在我们只需要将reverseK当做黑盒就行，知道能这么用就行。
 *    - 首先，我们先让链表反转第一组k个，获得初始参照片段的相关信息，这么做是为了接下来的过程当中，我们需要用到这些相关信息去循环操作这个链表，这些信息就是reverseK返回值：
 *      - [curHead, curTail, nextReverseNode],分别是[当前片段头节点，当前片段尾节点，下一个需要反转的片段的头节点]
 *      - 在执行完第一次k个反转后，我们开始正式计算times还有几次，我们在总数total上减去不能够反转的个数(total % k)，就是剩下能够反转k个的倍数，除以k就是我们总共能够反转的次数，由于我们用了一次反转，所以times还需要减去1
 *        就是剩下的还需要反转的次数
 *    - 我们开始进行链表的遍历，当nextReverseNode下一个需要反转的片段的头节点存在的时候，同时times不等于0的时候，我们进行循环内部的操作。这么定义循环条件的原因是：
 *      - 通过nextReverseNode判断确实是有下一个需要反转的片段的头节点，我们可以大胆的使用reverseK（因为我们可以看到reverseK的base case是没有node判空的，也不需要在我们的设定中是一定有node）
 *      - 通过times判断我们确实能够进行那么多次的相关操作
 *      - 当两者其中之一不符合条件，我们直接退出循环。times = 0的时候，退出循环，此时很可能nextReverseNode还有，这里就很巧妙，可以直接获得剩下不够反转的节点片段的第一个节点，就是nextReverseNode
 *        如果是nextReverseNode为空退出的，times一定等于0，因为是k个一组反转，nextReverseNode说明没节点了，times不等于0的话，说明还能支撑反转k个节点times次，两个结论相悖，不可能。
 *    - 循环细节：循环操作能够进行，我们就对nextReverseNode开始进行reverseK操作。然后依照题意：
 *           - 将上一个片段的尾部节点连接到当前反转出来的新头部节点上 curTail.next = nextHead;
 *           - 完事之后，将curTail当前尾部更新成新反转片段的尾部curTail = nextTail;
 *           - 接着，我们需要更新下一个片段反转的第一个结点nextReverseNode，以支撑循环进行
 *           - 最后我们还需要更新times，减去1，说明这样的以上这组操作还能进行几次
 *    - 当我们将该反转的都反转之后，我们就可以更新我们当前的curTail的下一个节点直接连到nextReverseNode，假如有未能反转的片段，nextReverseNode就是片段的头节点，如果没刚刚好能反转完，nextReverseNode就是null
 *    - 最后我们返回第一次进行k个反转之后的头部curHead（curHead一直没动），也就是整个链表的新头部。
 *
 */

export default reverseKGroup
