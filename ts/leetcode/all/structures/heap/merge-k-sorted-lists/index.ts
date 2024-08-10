/*
 * @lc app=leetcode.cn id=23 lang=typescript
 * @lcpr version=30204
 *
 * [23] 合并 K 个升序链表
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

class MinListHeap {
  private _data: ListNode[]
  private _size: number

  constructor() {
    this._data = []
    this._size = 0
  }

  public isEmpty(): boolean {
    return this._size === 0
  }

  public peek(): ListNode | null {
    const min = this._data[0]

    if (!min)
      return null

    return min
  }

  public insert(item: ListNode): void {
    this._data[this._size++] = item
    this._swim(this._size - 1)
  }

  public delMin(): ListNode {
    const min = this._data[0]

    this._swap(0, this._size - 1)
    this._data.pop()
    this._size--
    this._sink(0)

    return min
  }

  private _swim(index: number): void {
    while (this._data[this._parent(index)].val > this._data[index].val) {
      this._swap(index, this._parent(index))
      index = this._parent(index)
    }
  }

  private _sink(index: number): void {
    while (this._left(index) < this._size) {
      let minIndex = this._left(index)
      const _right = this._right(index)

      if (_right < this._size) {
        minIndex = this._data[minIndex].val < this._data[_right].val ? minIndex : _right
      }

      if (this._data[minIndex].val > this._data[index].val) {
        break
      }

      this._swap(index, minIndex)
      index = minIndex
    }
  }

  private _parent(index: number): number {
    if (index === 0)
      return 0
    return Math.floor((index - 1) / 2)
  }

  private _left(index: number): number {
    return 2 * index + 1
  }

  private _right(index: number): number {
    return 2 * index + 2
  }

  private _swap(i: number, j: number): void {
    ;[this._data[i], this._data[j]] = [this._data[j], this._data[i]]
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0)
    return null

  const heap = new MinListHeap()

  for (const node of lists) {
    if (node) {
      heap.insert(node)
    }
  }

  const dummy = new ListNode(-1)
  let tail = dummy

  while (!heap.isEmpty()) {
    const min = heap.delMin()
    tail.next = min
    tail = min
    if (min.next) {
      heap.insert(min.next)
    }
  }

  return dummy.next
}
// @lc code=end

/*
// @lcpr case=start
// [[1,4,5],[1,3,4],[2,6]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

 */
export { mergeKLists }
