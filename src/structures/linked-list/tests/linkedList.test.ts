import LinkedList from '..';

describe('LinkedList', () => {
  it('a', () => {
    const list = new LinkedList<number>();
    for (let i = 0; i < 5; i++) {
      list.addFrist(i);
    }
    // list.add(1, 5);
    list.removeFirst();
    list.removeFirst();
    list.removeLast();
    list.remove(1);
  });
});
