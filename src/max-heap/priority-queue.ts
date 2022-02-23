import MaxHeap from './max-heap';

class PriorityQueue extends MaxHeap {
  public heap: number[] = [];

  constructor(arr: number[]) {
    super();
    this.heap = this.build(arr);
  }

  /**
   * 获取权重最大元素
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
  increaseKey = (index: number, nextKey: number) => {
    // console.log(this.heap);
    const newHeap = [0, ...this.heap];
    const idx = index + 1;
    // temp[idx] = 
    if(newHeap[idx] > nextKey) {
      throw new Error('next key cant not be smaller than the previous one.');
    }
    newHeap[idx] = nextKey;
    let ptr = idx;
    while(ptr > 1) {
      const ptrParent = Math.floor(ptr / 2);
      if(newHeap[ptrParent] >= newHeap[ptr]) {
        break;
      } else {
        const temp = newHeap[ptr];
        newHeap[ptr] = newHeap[ptrParent];
        newHeap[ptrParent] = temp;
        ptr = ptrParent;
      }
    }
    newHeap.shift();
    this.heap = newHeap;
  }

  /**
   * 向优先队列中插入新值
   * @param key 优先权重
   */
  insertKey = (key: number) => {
    const heap = this.heap;
    this.increaseKey(heap.length, key);
  }

}

export default PriorityQueue;

