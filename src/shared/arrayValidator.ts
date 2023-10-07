/* eslint-disable @typescript-eslint/no-unused-vars */
type ValidatorConfig = {
  testTime?: number
  maxSize?: number
  maxValue?: number
}

export class ArrayValidator {
  public testTime: number
  public maxSize: number
  public maxValue: number

  constructor(config?: ValidatorConfig) {
    this.testTime = config?.testTime ?? 50000
    this.maxSize = config?.maxSize ?? 100
    this.maxValue = config?.maxValue ?? 100
  }

  // 按照功能实现一个方法A
  public test(..._args: unknown[]): void {
    throw new Error('需要按照功能实现一个方法test！')
  }

  // 按照功能实现一个方法B（但是B方法容易实现并且复杂度没那么好）
  public comparator(..._args: unknown[]): void {
    throw new Error('需要按照功能实现一个方法comparator！（但是comparator方法容易实现并且复杂度没那么好）')
  }

  // 跑测试用例
  //开始测试
  // 用随机样本产生器产生出来的两份同样的样本跑方法A和方法B，观察结果是否一致
  // 如果两个相同的样本集合有一个测试样本通过两个实现同样功能的方法AB处理后，数组的元素不同
  // 就停止测试，说明有方法实现的有问题！打印出来两个数组
  // 当样本量足够大且比对依然正确的时候，可以判定方法A已经实现正确
  public runTest(..._args: unknown[]): void {
    throw new Error('runTest方法需要被实现.')
  }

  // 先用随机样本产生器产生出随机样本，然后拷贝一份同样的随机样本
  public clone(sample: number[]): number[] {
    if (!sample) throw new Error('sample is not a number array.')

    const copysample: number[] = []

    for (let i = 0; i < sample.length; i++) {
      copysample[i] = sample[i]
    }

    return copysample
  }

  // 实现一个生成随机样本的产生器
  public generateRandomSample(): [number[], number[]] {
    let sample: number[] = []
    const sampleSize = Math.floor((this.maxSize + 1) * Math.random()) // [0,maxSize]

    for (let i = 0; i < sampleSize; i++) {
      // [-maxValue, maxValue]
      sample[i] = Math.floor((this.maxValue + 1) * Math.random()) - Math.floor((this.maxValue + 1) * Math.random())
    }

    sample = Array.from(new Set(sample))
    return [sample, this.clone(sample)]
  }

  // 比较两份处理过后的样本数组是否相同
  public isEqual(sample1: number[], sample2: number[]): boolean {
    if (sample1 == null && sample2 == null) {
      return true
    }
    if (sample1 == null || sample2 == null) {
      return false
    }
    if (sample1.length != sample2.length) {
      return false
    }
    for (let i = 0; i < sample1.length; i++) {
      if (sample1[i] != sample2[i]) {
        return false
      }
    }
    return true
  }

  //打印数组
  public printArray(arr1: number[], arr2: number[]): void {
    if (arr1 == null || arr2 == null) {
      return
    }
    for (let i = 0; i < arr1.length; i++) {
      // console.log(`i: ${arr1[i]} | ${arr2[i]}`)
    }
  }
}
