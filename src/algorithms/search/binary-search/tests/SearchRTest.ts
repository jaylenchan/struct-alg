import SearchTest from './SearchTest'
import BinarySearch from '..'

export default class SearchRTest extends SearchTest {
  public test(arr: number[], target: number): number {
    return BinarySearch.searchR(arr, target)
  }
}
