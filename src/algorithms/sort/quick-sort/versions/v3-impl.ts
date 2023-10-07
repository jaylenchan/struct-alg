export default class QuickSortV3 {

  public static partition(arr: number[], left: number, right: number): number {
    const randomIndex = left + Math.floor(Math.random() * (right - left + 1)) // [left, right] 的随机索引
    QuickSortV3._swap(arr, randomIndex, left) // 将randomIndex 和 left 位置的元素做交换

    // arr[l+1...i-1] <= v; arr[j+1...r] >= v
    let i = left + 1
    let j = right

    // eslint-disable-next-line no-constant-condition
    while (true) {
      while (i <= j && arr[i] < arr[left]) i += 1
      while (j >= i && arr[j] > arr[left]) j -= 1

      if (i >= j) break

      QuickSortV3._swap(arr, i, j)
      i += 1
      j -= 1
    }

    QuickSortV3._swap(arr, left, j)

    return j
  }

  public static sort(arr: number[]): void {
    QuickSortV3._quickSort(arr, 0, arr.length - 1)
  }

  private static _quickSort(arr: number[], left: number, right: number): void {
    if (left >= right) return

    const pivot = QuickSortV3.partition(arr, left, right)
    QuickSortV3._quickSort(arr, left, pivot - 1)
    QuickSortV3._quickSort(arr, pivot + 1, right)
  }

  private static _swap(arr: number[], i: number, j: number): void {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

}
