import MaxHeap from './index';

class PriorityQueue extends MaxHeap {
  public heap: number[] = [];

  constructor(arr: number[]) {
    super();
    this.heap = this.build(arr);
  }

  /**
   * 获取对重最大元素
   */
  maximum = () => {
    return this.heap[0];
  }

  /**
   * 从优先队列中取出最大元素
   */
  maximumExtract = () => {
    const heap = this.heap;
    if(heap.length === 0) return;
    const _temp = heap[0];
    heap[0] = heap[heap.length - 1];
    heap[heap.length - 1] = _temp;
    const res = heap.pop();
    this.maxHeapify(heap, 0);
    return res;
  }

  /**
   * 增加key值，提高优先级
   * @param prevKey 
   * @param nextKey 
   */
  // @TODO:
  increaseKey = (prevKey: number, nextKey: number) => {

  }

}

const arr = [2, 34,56, 67,7,3 ,23, 4];
const priorityQueue = new PriorityQueue(arr);
console.log(priorityQueue.heap);
console.log(priorityQueue.maximumExtract(), priorityQueue.heap);
console.log(priorityQueue.maximumExtract(), priorityQueue.heap);
console.log(priorityQueue.maximumExtract(), priorityQueue.heap);
