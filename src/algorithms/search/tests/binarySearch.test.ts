import SearchRTest from './SearchRTest'
import SearchTest from './SearchTest'


describe('BinarySearch', () => {
  it('BinarySearch Recursive Test', () => {
    const test = new SearchRTest()
    test.runTest()
  })

  it('BinarySerach Test', () => {
    const test = new SearchTest()
    test.runTest()
  })
})
