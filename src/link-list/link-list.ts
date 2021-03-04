
export class LinkNode<T> {
  public value: T | null = null;
  public next: LinkNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

type IsEqual<T> = (prev: T, next: T) => boolean;

const defaultIsEaqual = (a: any, b: any) => a === b;
export default class LinkList<T = number> {
  public head: LinkNode<T> | null = null;
  public tail: LinkNode<T> | null = null;
  private isEaqual?: IsEqual<T>;
  constructor(arrayList: T[], isEaqual?: IsEqual<T>) {
    this.head = this.init(arrayList);
    if(isEaqual) this.isEaqual = isEaqual;
  }

  private init(array: T[]): LinkNode<T> | null {
    if(array.length === 0) return null;
    let head = new LinkNode<T>(array[0]);
    let tail = head;
    for(let i = 1; i < array.length; i++) {
      tail.next = new LinkNode<T>(array[i]);
      tail = tail.next;
    }
    this.tail = tail;
    return head;
  }

  public insert(prev: T, item: T) {
    const isEaqual: IsEqual<T> = this.isEaqual ? this.isEaqual : defaultIsEaqual;
    let ptr = this.head;
    while(ptr !== null) {
      if(isEaqual(ptr.value as T, prev)) {
        let temp = ptr.next;
        ptr.next = new LinkNode<T>(item);
        ptr.next.next = temp;
        // 若插入节点为尾节点，更新
        if(temp === null) {
          this.tail = ptr.next;
        }
        temp = null;
        break;
      }
      ptr = ptr.next;
    }
    if(ptr === null) {
      throw new Error('prev node is not found');
    }
  }

  public remove(value: T) {
    const isEaqual: IsEqual<T> = this.isEaqual ? this.isEaqual : defaultIsEaqual;
    // 链表头节点为空
    if(this.head === null) return;
    if(isEaqual(this.head?.value as T, value)) {
      this.head = (this.head as LinkNode<T>).next;
      return;
    }
    let prev: LinkNode<T> | null = this.head;
    let ptr = this.head?.next;
    while(ptr !== null) {
      if(isEaqual(ptr?.value as T, value) && ptr!==null && prev !==null) {
        let temp = prev.next;
        prev.next = ptr!.next;
        ptr!.next = null;
        if(ptr?.next === null) {
          this.tail = prev;
        }
        return temp;
      }
      ptr = ptr?.next;
      prev = prev!.next;
    }
    if(ptr === null) {
      throw new Error('node is not found');
    }
  }

  public add(value: T) {
    if(this.tail === null) {
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
    if(ptr === null) return null;
    let isEaqual: IsEqual<T> = this.isEaqual ? this.isEaqual : defaultIsEaqual;
    while(ptr) {
      if(isEaqual(ptr.value as T, value)) {
        return ptr;
      }
      ptr = ptr.next;
    }
    return null;
  }
}
