import QuickSortTest from './QuickSortTest'
import QuickSortV1Test from './QuickSortV1Test'
import QuickSortV2Test from './QuickSortV2Test'
import QuickSortV3Test from './QuickSortV3Test'
import QuickSortV4Test from './QuickSortV4Test'


describe('Quick Sort', () => {
  it('Quick Sort Test', () => {
    const test = new QuickSortTest()

    test.runTest()
  })

  it('Quick Sort V1 Test [基础快排]', () => {
    const test = new QuickSortV1Test()

    test.runTest()
  })

  it('Quick Sort V2 Test [随机快排]', () => {
    const test = new QuickSortV2Test()

    test.runTest()
  })

  it('Quick Sort V3 Test [二路快排]', () => {
    const test = new QuickSortV3Test()

    test.runTest()
  })

  it('Quick Sort V4 Test [三路快排]', () => {
    const test = new QuickSortV4Test()

    test.runTest()
  })
})
