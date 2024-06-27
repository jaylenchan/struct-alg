import { BinarySearchTree } from '@tsalg/data-structures/binary-search-tree'
import { quickSort } from '@tsalg/algorithms/sorts'
import { rotate_array } from '@tsalg/leetcode/array'

function main() {
  const bst = new BinarySearchTree<number>()
  // eslint-disable-next-line no-console
  console.log("🚀 ~ BinarySearchTree:", bst)

  const quickSortNums = [11, 32, 23, 41, 75, 60, 71]
  quickSort(quickSortNums)
  // eslint-disable-next-line no-console
  console.log("🚀 ~ quickSortNums:", quickSortNums)

  const rotateNums = [11, 32, 23, 41, 75, 60, 71]
  rotate_array.rotate(rotateNums, 3)
  // eslint-disable-next-line no-console
  console.log("🚀 ~ lc189 rotateNums:", rotateNums)
}

main()
