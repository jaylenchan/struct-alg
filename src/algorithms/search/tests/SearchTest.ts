import { ArrayValidator } from 'tsalg/shared'

import BinarySearch from '..'

export default class SearchTest extends ArrayValidator {
  public test(arr: number[], target: number): number {
    return BinarySearch.search(arr, target)
  }

  public comparator(arr: number[], target: number): number {
    let result = -1

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        result = i
        break
      }
    }

    return result
  }

  public runTest(): void {
    //开始测试
    for (let i = 0; i < this.testTime; i++) {
      const [sample1, sample2] = this.generateRandomSample()

      const isEven = Math.floor(Math.random() * sample1.length) % 2 == 0
      const randomEl = Math.floor(Math.random() * this.maxValue - Math.random() * this.maxValue)
      const sampleEl = sample1[Math.floor(sample1.length * Math.random())]
        ? sample1[Math.floor(sample1.length * Math.random())]
        : randomEl
      const target = isEven ? sampleEl : randomEl

      sample1.sort((a, b) => a - b)
      sample2.sort((a, b) => a - b)
      // console.log(sample1, sample2);
      // 用随机样本产生器产生出来的两份同样的样本跑方法A和方法B，观察结果是否一致
      // 如果两个相同的样本集合有一个测试样本通过两个实现同样功能的方法AB处理后，数组的元素不同
      // 就停止测试，说明有方法实现的有问题！打印出来两个数组
      const result1 = this.test(sample1, target)
      const result2 = this.comparator(sample2, target)

      assert.equal(result1, result2)
    }

    // 当样本量足够大且比对依然正确的时候，可以判定方法A已经实现正确
  }
}
