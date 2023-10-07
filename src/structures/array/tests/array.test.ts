import Array from '..';

describe('Array', () => {
  it('arr.get(0) is 1', () => {
    const arr = new Array<number>(10);
    arr.add(0, 1);

    assert.equal(arr.get(0), 1);
  });

  it('arr.set(1) is 2', () => {
    const arr = new Array<number>();
    arr.add(0, 1);
    arr.add(1, 1);

    arr.set(1, 2);

    assert.equal(arr.get(1), 2);
  });

  it('arr.contains(1) is true', () => {
    const arr = new Array<number>(10);
    arr.add(0, 1);

    assert.equal(arr.contains(1), true);
  });

  it('arr.removeLast() is 3', () => {
    const arr = new Array<number>(3);
    arr.add(0, 1);
    arr.add(1, 2);
    arr.add(2, 3);

    const result = arr.removeLast();

    assert.equal(result, 3);
  });
});
