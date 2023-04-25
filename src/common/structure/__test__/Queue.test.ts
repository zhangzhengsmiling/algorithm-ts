import Queue from '@common/structure/Queue';

describe('structure toolkit: Queue', () => {
  it('module import:', () => {
    expect(Queue).toBeInstanceOf(Function)
  });

  it('instantiation by empty value: ', () => {
    const queue = Queue.of();
    expect(queue.value).toEqual([]);
  })
  
  it('instantiation by value: ', () => {
    const queue = Queue.of([1, 2, 3]);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  })

  it('performance: ', () => {
    const queue = Queue.of();
    queue.enqueue(12);
    expect(queue.value).toEqual([12])
    const d = queue.dequeue();
    expect(d).toBe(12);
    expect(queue.value).toEqual([]);
    queue.enqueue(123);
    queue.enqueue(246);
    queue.enqueue(369);
    expect(queue.dequeue()).toBe(123);
    expect(queue.dequeue()).toBe(246);
    expect(queue.dequeue()).toBe(369);
  })
})
