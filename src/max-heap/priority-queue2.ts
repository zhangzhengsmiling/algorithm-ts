import MaxHeap from './heap';
import { IComparable } from './heap';
class PriorityQueue<ADT extends IComparable> extends MaxHeap<ADT> {
  constructor(list: ADT[]) {
    super(list);
  }

  public enqueue(item: ADT) {
    this._heap.push(item);
    this.shiftUp(this._heap.length - 1);
  }

  public dequeue(): ADT {
    if (this.empty()) return null;
    if (this._heap.length === 2) return this._heap.pop();
    const _top = this._heap[1];
    this._heap[1] = this._heap.pop();
    this.shiftDown(1);
    return _top;
  }

  public update(oldKey, newKey): boolean{
    if (this.empty()) return false;
    const _heap = this._heap;
    let targetIndex = this._heap
      .filter(item => item !== null)
      .findIndex(
        item => item.key === oldKey
      );
    if (targetIndex === -1) return false;
    targetIndex++;
    _heap[targetIndex].key = newKey;

    if (newKey < oldKey) {
      this.shiftDown(targetIndex);
      return true;
    } else {
      this.shiftUp(
        targetIndex
      );
      return true;
    }
  }

  public insert(item: ADT) {
    const _heap = this._heap;
    _heap.push(item);
    this.shiftUp(_heap.length - 1);
  }

}

