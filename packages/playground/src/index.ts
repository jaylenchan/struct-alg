import { BinarySearchTree } from '@tsalg/data-structures/binary-search-tree'
import { quickSort } from '@tsalg/algorithms/sorts'
import { lc189 } from '@tsalg/leetcode/array'

function main() {
  // eslint-disable-next-line no-console
  console.log("🚀 ~ BinarySearchTree:", BinarySearchTree)

  // eslint-disable-next-line no-console
  console.log("🚀 ~ quickSort:", quickSort([3, 2, 1, 5, 4, 6, 7, 8, 9, 0]))

  // eslint-disable-next-line no-console
  console.log("🚀 ~ lc189:", lc189.rotate([1, 2, 3, 4, 5, 6, 7], 3))
}

main()
