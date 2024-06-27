import { swap } from '@tsalg/shared'

export function insertionSort(arr: number[]): void {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      swap(arr, j, j - 1)
    }
  }
}
