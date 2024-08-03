/*
 * @lc app=leetcode.cn id=380 lang=typescript
 * @lcpr version=30204
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
class RandomizedSet {
  private _list = new Array<number>()
  private _map = new Map<number, number>()
  private _size = 0;

  /**
   * O(1)
   * 前提：元素不存在才加入
   * 元素不存在，加入并记录元素坐标
   *   1、将元素加入_list
   *   2、将元素及其坐标记录到map中
   */
  insert(val: number): boolean {
    if (this.isElementExist(val)) {
      return false;
    }

    this._map.set(val, this._size++);
    this._list.push(val);

    return true;
  }

  /**
   * O(1)
   * 设计整个RadonmizedSet的核心，因为按照常规想法设计删除操作很难到达O(1)
   * 借助map找到最后一个元素的loc，然后执行元素覆盖操作，也是一种删除的操作，可以借鉴这种想法。
     前提：元素存在才删除
   * 技巧：其实就是找到map中对应val在list所在的loc
   *      然后将list中的最后一个元素放到loc
          最后将最后一个元素pop，缩短数组
   */
  remove(val: number): boolean {
    if (!this.isElementExist(val)) {
      return false;
    }

    // 找到要删除的元素在list中的位置
    const toDisposeLoc = this.getElementLoc(val);
    // 拿到最后一个元素
    const lastElement = this._list[--this._size];

    // 删除指定元素其实就是拿最后一个元素覆盖指定位置的元素
    // 然后缩短数组
    this._list[toDisposeLoc] = lastElement;
    this._list.pop()

    // 更新map：将map中的lastElement，更新为toDisposeLoc
    this._map.set(lastElement, toDisposeLoc);
    this._map.delete(val);

    return true
  }

  /**
   * O(1)
   * 取长度为0 - list.length之前的随机数作为index，返回即可
   */
  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this._list.length)

    return this._list[randomIndex]
  }

  isElementExist(val: number) {
    const loc = this._map.get(val);

    // NOTE:不要简写，因为0也是合法的loc
    if (loc !== undefined)
      return true;

    return false;
  }

  getElementLoc(val: number) {
    const loc = this._map.get(val);

    // NOTE:不要简写，因为0也是合法的loc
    if (loc !== undefined)
      return loc;

    return -1;
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

export const insert_delete_get_random_o_1 = { RandomizedSet }
