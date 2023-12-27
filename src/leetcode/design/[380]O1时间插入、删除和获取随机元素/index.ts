/*
 * @lc app=leetcode.cn id=380 lang=typescript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start
class RandomizedSet {
  private _data: number[]
  private _idxMap: Map<number, number>
  private _size: number

  constructor() {
    this._data = []
    this._idxMap = new Map<number, number>()
    this._size = 0
  }

  public insert(val: number): boolean {
    if (this._contains(val)) return false

    this._data[this._size] = val
    this._idxMap.set(val, this._size++)

    return true
  }

  public remove(val: number): boolean {
    if (!this._contains(val)) return false

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const index = this._idxMap.get(val)!

    this._swap(index, this._size - 1)
    this._idxMap.set(this._data[index], index)
    this._idxMap.delete(val)
    this._size--

    return true
  }

  public getRandom(): number {
    const random = Math.floor(Math.random() * this._size)

    return this._data[random]
  }

  private _contains(val: number): boolean {
    return this._idxMap.has(val)
  }

  private _swap(i: number, j: number): void {
    ;[this._data[i], this._data[j]] = [this._data[j], this._data[i]]
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// @lc code=end

export { RandomizedSet }
