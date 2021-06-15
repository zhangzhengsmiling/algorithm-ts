export interface IComparable {
  key: number;
}

class MaxHeap<ADT extends IComparable> {

  protected _heap: ADT[];

  constructor(list: ADT[]) {
    // 构造时下标从1开始，方便计算
    this._heap = [null, ...list];
    this.build();
  }
  get data(): ADT[] {
    return this._heap.slice(1);
  }
  public static left(parentIndex: number) {
    return parentIndex * 2;
  }
  public static right(parentIndex: number) {
    return parentIndex * 2 + 1;
  }
  public static parent(childIndex: number) {
    return Math.floor(childIndex / 2);
  }

  protected swap(i: number, j: number) {
    const _heap = this._heap;
    if (i < 1 || j >= _heap.length)
      throw new Error('Exception: out of boundary...');
    const _tmep = _heap[i];
    _heap[i] = _heap[j];
    _heap[j] = _tmep;
  }

  /**
   * 节点下沉
   * @param index 
   * @returns 
   */
  public shiftDown (index: number) {
    const _heap = this._heap;
    const pIndex = index;
    const lIndex = MaxHeap.left(index);
    const rIndex = MaxHeap.right(index);
    let maxIndex: number = pIndex;
    [lIndex, rIndex].forEach(idx => {
      if (!_heap[maxIndex] || !_heap[idx]) return;
      if (_heap[maxIndex].key < _heap[idx].key) maxIndex = idx;
    });
    if (maxIndex === pIndex) return;
    this.swap(maxIndex, pIndex);
    this.shiftDown(maxIndex);
  }

  /**
   * 上浮操作
   * @param childIndex 
   */
  public shiftUp(childIndex: number) {
    const _heap = this._heap;
    while(childIndex > 1 && _heap[childIndex].key > _heap[MaxHeap.parent(childIndex)].key) {
      this.swap(childIndex, MaxHeap.parent(childIndex));
      childIndex = MaxHeap.parent(childIndex);
    }
  }

  /**
   * 构建一个大顶堆
   */
  public build () {
    const _heap = this._heap;
    for (let i = Math.floor(_heap.length / 2); i > 0; i--) {
      this.shiftDown(i);
    }
  }

  /**
   * 查询当前权重最大的元素
   */
  public top (): ADT {
    if (this._heap.length <= 1) return null;
    return this._heap[1];
  }
  
  public empty(): boolean {
    return this._heap.length <= 1;
  }
}

export default MaxHeap;
