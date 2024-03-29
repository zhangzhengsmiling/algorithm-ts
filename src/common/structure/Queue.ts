export default class Queue<T> {
  private __queue;
  public size: number;
  private constructor(init: T[]) {
    this.__queue = init;
    this.size = init.length;
  }

  static of<T> (value: T[] = []) {
    return new Queue(value);
  }

  public enqueue(t: T) {
    this.__queue.push(t);
    this.size++;
  }

  public dequeue(): T | null {
    if (this.empty()) return null;
    return this.__queue.shift();
  }

  public empty() {
    return this.size === 0;
  }

}