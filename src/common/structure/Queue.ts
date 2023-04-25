export default class Queue<T> {
  private _queue;
  public size: number;
  private constructor(init: T[]) {
    this._queue = init;
    this.size = init.length;
  }

  static of<T> (value: T[] = []) {
    return new Queue(value);
  }

  public enqueue(t: T) {
    this._queue.push(t);
    this.size++;
  }

  public dequeue(): T | null {
    if (this.empty()) return null;
    return this._queue.shift();
  }

  public empty() {
    return this.size === 0;
  }

  get value() {
    return this._queue;
  }

}