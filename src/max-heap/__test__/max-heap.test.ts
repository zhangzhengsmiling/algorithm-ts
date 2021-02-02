import MaxHeap from '../max-heap';

describe('max heap:', () => {
  it('utils max-heapify:', () => {
    const array = [4, 5, 3, 2 ,1];
    const mh = new MaxHeap();
    mh.maxHeapify(array, 0);
    expect(array).toEqual([5, 4, 3, 2, 1]);
  });

  it('utils build:', () => {
    const mh = new MaxHeap();
    const array = [1, 2, 3, 4, 5];
    const temp = mh.build(array);
    expect(mh.build([])).toEqual([]);
    expect(temp).toEqual([ 5, 4, 3, 1, 2 ]);
  });

  it('utils heap sort:', () => {
    const mh = new MaxHeap();
    const temp = mh.heapSort([5, 4, 3, 2, 1]);
    expect(temp).toEqual([1, 2, 3, 4, 5]);
  })
})
