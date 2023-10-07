import SegmentTree from '..'


describe('SegmentTree', () => {
  it('SegmentTree Build Test', () => {
    const segmentTree = new SegmentTree<number>(
      [-2, 0, 3, -5, 2, -1],
      (a: number, b: number) => a + b
    )
    // prettier-ignore
    assert.equal(segmentTree.toString(), `[-3, 1, -4, -2, 3, -3, -1, -2, 0, null, null, -5, 2, null, null, null, null, null, null, null, null, null, null, null]`);
  })

  it('SegmentTree Query Test', () => {
    const segmentTree = new SegmentTree<number>(
      [-2, 0, 3, -5, 2, -1],
      (a: number, b: number) => a + b
    )
    assert.equal(segmentTree.query(0, 2), 1)
  })
})
