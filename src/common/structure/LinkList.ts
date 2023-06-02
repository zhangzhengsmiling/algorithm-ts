export class LinkNode<T> {
  public value: T | null = null;
  public next: LinkNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

type IsEqual<T> = (prev: T, next: T) => boolean

const defaultIsEqual = (a: any, b: any) => a === b;
export default class LinkList<T = number> {
  public head: LinkNode<T> | null = null;
  public tail: LinkNode<T> | null = null;
  private isEqual?: IsEqual<T>;
  private constructor(arrayList: T[], isEqual?: IsEqual<T>) {
    this.head = this.init(arrayList);
    if (isEqual) this.isEqual = isEqual;
  }

  public static of<T>(array: T[], isEqual?: IsEqual<T>): LinkList<T> {
    return new LinkList(array, isEqual);
  }

  private init(array: T[]): LinkNode<T> | null {
    if (array.length === 0) return null;
    const head = new LinkNode<T>(array[0]);
    let tail = head;
    for (let i = 1; i < array.length; i++) {
      tail.next = new LinkNode<T>(array[i]);
      tail = tail.next;
    }
    this.tail = tail;
    return head;
  }

  public insert(prev: T, item: T) {
    const isEqual: IsEqual<T> = this.isEqual ? this.isEqual : defaultIsEqual;
    let ptr = this.head;
    while (ptr !== null) {
      if (isEqual(ptr.value as T, prev)) {
        let temp = ptr.next;
        ptr.next = new LinkNode<T>(item);
        ptr.next.next = temp;
        // 若插入节点为尾节点，更新
        if (temp === null) {
          this.tail = ptr.next;
        }
        temp = null;
        break;
      }
      ptr = ptr.next;
    }
    if (ptr === null) {
      throw new Error('prev node is not found');
    }
  }

  public remove(value: T) {
    const isEqual: IsEqual<T> = this.isEqual ? this.isEqual : defaultIsEqual;
    // 链表头节点为空
    if (this.head === null) return;
    if (isEqual(this.head?.value as T, value)) {
      this.head = (this.head as LinkNode<T>).next;
      return;
    }
    let prev: LinkNode<T> | null = this.head;
    let ptr = this.head?.next;
    while (ptr !== null) {
      if (isEqual(ptr?.value as T, value) && ptr !== null && prev !== null) {
        const temp = prev.next;
        prev.next = ptr!.next;
        ptr!.next = null;
        if (ptr?.next === null) {
          this.tail = prev;
        }
        return temp;
      }
      ptr = ptr?.next;
      prev = prev!.next;
    }
    if (ptr === null) {
      throw new Error('node is not found');
    }
  }

  public add(value: T) {
    if (this.tail === null) {
      // 添加头节点
      this.head = new LinkNode<T>(value);
      this.tail = this.head;
      return;
    }
    this.tail!.next = new LinkNode<T>(value);
    this.tail = this.tail!.next;
  }

  public search(value: T): LinkNode<T> | null {
    let ptr = this.head;
    if (ptr === null) return null;
    const isEqual: IsEqual<T> = this.isEqual ? this.isEqual : defaultIsEqual;
    while (ptr) {
      if (isEqual(ptr.value as T, value)) {
        return ptr;
      }
      ptr = ptr.next;
    }
    return null;
  }
}
