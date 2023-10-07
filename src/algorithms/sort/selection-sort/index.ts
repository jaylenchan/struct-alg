export default class SelectionSort {

  public static sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
      let min = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j
        }
      }
      SelectionSort._swap(arr, i, min)
    }
  }

  private static _swap(arr: number[], i: number, j: number): void {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

}
