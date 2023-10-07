import BinarySearchTreeSet from '../BinarySearchTreeSet';
import LinkedListSet from '../LinkedListSet';

describe('BinarySearchTreeSet', () => {
  it('diffrence num size is 5', () => {
    const set = new BinarySearchTreeSet<number>();

    const nums = [1, 1, 2, 3, 3, 4, 5];

    for (const num of nums) {
      set.add(num);
    }

    assert.equal(set.getSize(), 5);
  });
});

describe('LinkedListSet', () => {
  it('diffrence num size is 4', () => {
    const set = new LinkedListSet<number>();

    const nums = [1, 1, 2, 3, 3, 4];

    for (const num of nums) {
      set.add(num);
    }

    assert.equal(set.getSize(), 4);
  });
});
