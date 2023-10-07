/*
 * @lc app=leetcode.cn id=622 lang=typescript
 *
 * [622] 设计循环队列
 */

// @lc code=start
class MyCircularQueue {

  private _data: number[]
  private _capacity: number
  private _size: number
  private _head: number
  private _tail: number

  constructor(k: number) {
    this._data = new Array(k).fill(Infinity)
    this._capacity = k
    this._size = 0
    this._head = 0
    this._tail = 0
  }

  public enQueue(value: number): boolean {
    if (this.isFull()) return false

    this._data[this._tail] = value
    this._tail = ++this._tail == this._capacity ? 0 : this._tail
    this._size++

    return true
  }

  public deQueue(): boolean {
    if (this.isEmpty()) return false

    this._head = ++this._head == this._capacity ? 0 : this._head
    this._size--

    return true
  }

  public Front(): number {
    if (this.isEmpty()) return -1

    return this._data[this._head]
  }

  public Rear(): number {
    if (this.isEmpty()) return -1

    const index = this._tail - 1 == -1 ? this._capacity - 1 : this._tail - 1

    return this._data[index]
  }

  public isEmpty(): boolean {
    return this._size == 0
  }

  public isFull(): boolean {
    return this._size == this._capacity
  }

}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

export default MyCircularQueue
/**
 * #思路#
 * 循环队列的实现往往要求给定k容量，然后不断的使用初始化的数组的k个位置去进行循环队列的实现。
 * 1. 实现isEmpty队空和isFull队满的判断：和大部分题解不同，我们额外使用一个size变量去存储当前队列中的元素数量：
 *    - 情况1 - 队空：当我们的size == 0的时候，说明队列中没有任何元素
 *    - 情况2 - 队满： 当我们的size == 构造时给定的容量k时，我们判定队满（为了保存k，我们增加一个变量capacity定义为队列可容纳的元素最大容量）
 * 2. enQueue进队：当元素尝试入队时，我们需要判定是否队满，
 *    - 如果队满，依照题意返回false
 *    - 如果队列有空余：则
 *            - 将元素放入tail位置（tail位置永远为下一个要入队的元素所在位置）
 *            - tail位置放入元素后，tail需要自增，此时我们需要判断tail + 1 == this.capacity，下一个成为队尾的地方，是否跟元素容量一样，是的话会越界
 *              因此，我们有tail = _tail + 1 == this._capacity ? 0 : _tail + 1,即如果越界我们来到0，否则直接自增加1
 *            - 在入队元素后，我们需要让size++，表示队里元素多了一个
 * 3. deQueue出队：当元素尝试出队时，我们需要判断是否队空，
 *    - 如果队空，直接返回false
 *    - 如果队非空，则
 *            - 将直接移动head指针自增，表示当前head所指向元素出队。但此时head同样跟tail一样有越界的危险，所以也需要判断是否越界，越界变0，否则直接自增
 *            - _size--，表示队里元素少了一个
 * 4. Front取队头元素：直接返回head所在位置的元素即可
 * 5. Rear取队尾元素：我们知道tail实际上是下一个元素入队的地方，所以真正数据有效位置（或者说真的队尾）是在tail - 1的地方，但是加入tail来到了0位置，则一样有越界危险。
 *                  因此，我们也需要判断tail - 1 < 0 吗，如果是，tail来到this._capacity - 1的位置，即无循环概念的队列最后一个有效数据的位置取出再返回。
 * 6. 总结：循环队列的基本操作实现大部分跟队列相同，不同得是循环使用固定的位置。为此，我们head和tail都是有越界风险，其实仔细想想，head和tail不过也是在0到k-1位置不断
 *    走来走去，唯一需要我们担心的是两个越界条件：1. 继续自增是否越界？是的话，那就来到0位置； 2.继续自减是否越界？是的话，那就来到k-1位置。其他都是正常前进后退。另外，我们
 *    利用size去维护队列元素个数信息来判断队空和队满，更加方便记忆。
 */
