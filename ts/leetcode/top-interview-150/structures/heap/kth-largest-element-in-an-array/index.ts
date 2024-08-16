/*
 * @lc app=leetcode.cn id=215 lang=typescript
 * @lcpr version=30204
 *
 * [215] 数组中的第K个最大元素
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  // 建立一个有k容量的小根堆
  // 不断往小根堆里放，丰富下小根堆的add方法
  // 如果是满堆，判断堆顶是否大于欲加入的元素，是的话直接拒绝加入。否则删除堆顶，加入元素
  const minHeap = new MinHeap(k);

  for (let i = 0; i < nums.length; i++) {
    minHeap.add(nums[i])
  }

  return minHeap.getMin()!;
};

class MinHeap {
  static readonly None = -1;

  _data = [MinHeap.None];
  _size = 0;

  constructor(private _capacity: number) { }

  getMin(): number | undefined {
    if (this.isEmpty()) {
      return;
    }

    return this._data[1]
  }

  delMin(): number | undefined {
    if (this.isEmpty()) {
      return;
    }

    const min = this.getMin();

    this.swap(1, this._size); // 思考：交换最后一个子节点到了堆顶，是否就是最小的了？不是的，所以需要siftDown
    this._data.pop();
    this._size--;
    this.siftDown(1);

    return min;
  }

  add(val: number): void {
    // 如果满了，将堆顶拿出来跟当前欲加入的元素做比较，如果比val小直接删除堆顶
    if (this.isFull()) {
      if (this.getMin()! > val) {
        return;
      }

      this.delMin();
    }

    this._data.push(val); // 思考：插入元素为堆的最后一个节点，一定就是最大的吗？不是的，所以需要siftUp
    this._size++;
    this.siftUp(this._size);
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  isFull(): boolean {
    return this._size === this._capacity;
  }

  getLeftChildIndex(i: number): number {
    return 2 * i;
  }

  getRightChildIndex(i: number): number {
    return 2 * i + 1;
  }

  getParentIndex(i: number): number {
    return Math.floor(i / 2);
  }

  findMinIndex(i: number, j: number): number {
    return Math.min(this._data[i], this._data[j]) === this._data[i] ? i : j;
  }

  // 将大的往下沉
  // 做比较：找到两个子节点中最小的那一个做比较，比它大，就交换位置下沉，然后不断继续这个过程
  siftDown(i: number): void {
    const leftChildIndex = this.getLeftChildIndex(i)
    const rightChildIndex = this.getRightChildIndex(i)

    if (leftChildIndex <= this._size && rightChildIndex <= this._size) {
      const minChildIndex = this.findMinIndex(leftChildIndex, rightChildIndex);

      if (this._data[i] > this._data[minChildIndex]) {
        this.swap(i, minChildIndex);
        this.siftDown(minChildIndex);
      }
    }
    else if (rightChildIndex > this._size) {
      if (this._data[i] > this._data[leftChildIndex]) {
        this.swap(i, leftChildIndex);
        this.siftDown(leftChildIndex);
      }
    }
    else if (leftChildIndex > this._size) {
      if (this._data[i] > this._data[rightChildIndex]) {
        this.swap(i, rightChildIndex);
        this.siftDown(rightChildIndex);
      }
    }
  }

  // 将小的往上浮
  // 做比较：跟父元素比较，比父元素小，就交换位置上浮，然后不断继续这个过程
  siftUp(i: number): void {
    if (i <= 1) {
      return;
    }

    const parentIndex = this.getParentIndex(i)

    if (this._data[i] < this._data[parentIndex]) {
      this.swap(i, parentIndex);
      this.siftUp(parentIndex);
    }
  }

  swap(i: number, j: number): void {
    [this._data[j], this._data[i]] = [this._data[i], this._data[j]];
  }
}

// @lc code=end

/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 4\n
// @lcpr case=end

 */

export const kth_largest_element_in_an_array = { findKthLargest }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [215] 数组中的第K个最大元素
     */
    kth_largest_element_in_an_array: {
      findKthLargest: (nums: number[], k: number) => number
    }
  }
}
