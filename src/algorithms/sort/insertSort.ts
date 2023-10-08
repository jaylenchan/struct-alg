export class InsertionSort {
  public static sort(arr: number[]): void {
    for (let i = 1; i < arr.length; i++) {
      for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
        InsertionSort._swap(arr, j, j - 1)
      }
    }
  }

  private static _swap(arr: number[], i: number, j: number): void {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}
