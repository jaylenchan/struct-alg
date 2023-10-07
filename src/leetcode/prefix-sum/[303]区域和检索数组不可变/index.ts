/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {

  private _prefixSum: number[]
  constructor(nums: number[]) {
    this._prefixSum = this.createPrefixSum(nums)
  }

  public sumRange(left: number, right: number): number {
    return this._prefixSum[right + 1] - this._prefixSum[left]
  }

  public createPrefixSum(nums: number[]): number[] {
    const _prefixSum: number[] = []

    for (let i = 0; i <= nums.length; i++) {
      if (i == 0) {
        _prefixSum[i] = 0
      } else {
        _prefixSum[i] = _prefixSum[i - 1] + nums[i - 1]
      }
    }

    return _prefixSum
  }

}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

export default NumArray
