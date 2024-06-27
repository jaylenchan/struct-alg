interface NestedInteger {
  isInteger: () => boolean
  getInteger: () => number
  getList: () => NestedInteger[]
}

/*
 * @lc app=leetcode.cn id=341 lang=typescript
 *
 * [341] 扁平化嵌套列表迭代器
 */
// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

class NestedIterator {
  private _queue: number[]

  constructor(nestedList: NestedInteger[]) {
    this._queue = this._flatten(nestedList)
  }

  public hasNext(): boolean {
    return this._queue.length > 0
  }

  public next(): number {
    if (this._queue.length === 0)
      return -1

    return this._queue.shift()!
  }

  // 扁平化嵌套数组，返回扁平化后的数组
  private _flatten(list: NestedInteger[]): number[] {
    let level: number[] = []
    for (let i = 0; i < list.length; i++) {
      const isInteger = list[i].isInteger()
      if (isInteger) {
        level.push(list[i].getInteger())
      }
      else {
        level = level.concat(this._flatten(list[i].getList()))
      }
    }
    return level
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
// @lc code=end

export { NestedIterator }
