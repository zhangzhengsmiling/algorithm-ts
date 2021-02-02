import PriorityQueue from '../priority-queue';

describe('priority queue test suites:', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const priorityQueue = new PriorityQueue(arr);
  const priorityQueue2 = new PriorityQueue([]);
  it('init a priority queue:', () => {
    expect(priorityQueue.heap[0]).toBe(6);
    expect(priorityQueue2.heap).toEqual([]);
  });

  it('maxmium:', () => {
    const temp = priorityQueue.maximum();
    expect(temp).toBe(6);
    expect(priorityQueue2.maximum()).toBe(undefined);
  });

  it('maxmium extract:', () => {
    const temp = priorityQueue.maximumExtract();
    expect(temp).toBe(6);
    expect(priorityQueue.heap[0]).toBe(5);
    expect(priorityQueue.heap.length).toBe(5);
    const temp2 = priorityQueue2.maximumExtract();
    expect(temp2).toBe(undefined);
    expect(priorityQueue2.heap[0]).toBe(undefined);
  });

  it('increase key:', () => {
    const temp = priorityQueue.heap[2];
    const count = priorityQueue.heap.filter(num => num === temp).length;
    priorityQueue.increaseKey(2, 1000);
    expect(priorityQueue.heap.length).toBe(5);
    expect(priorityQueue.heap[0]).toBe(1000);
    const cur = priorityQueue.heap.filter(num => num === temp).length;
    expect(cur).toBe(count - 1);
  })

  it('insert key:', () => {
    const len = priorityQueue.heap.length;
    priorityQueue.insertKey(10000);
    expect(priorityQueue.heap[0]).toBe(10000);
    expect(priorityQueue.heap.length).toBe(len + 1);
  })

})
