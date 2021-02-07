import { textSpanIsEmpty } from "typescript";

export class LinkNode<T> {
  public value: T | null = null;
  public next: LinkNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkList<T = number> {
  public head: LinkNode<T> | null = null;
  private comparator: ((prev: T, next: T) => number) | null = null;
  constructor(arrayList: T[], comparator?: (ptrv: T, next: T) => number) {
    this.head = this.init(arrayList);
    if(comparator) this.comparator = comparator;
  }

  private init(array: T[]): LinkNode<T> | null {
    if(array.length === 0) return null;
    let head = new LinkNode<T>(array[0]);
    let tail = head;
    for(let i = 1; i < array.length; i++) {
      tail.next = new LinkNode<T>(array[i]);
      tail = tail.next;
    }
    return head;
  }

  public insert(prev: T, item: T) {
    const defaultComparator = (a: number, b: number): number => a - b;
    const comparator: (a: any, b: any) => number = this.comparator !== null ? this.comparator : defaultComparator;
    let ptr = this.head;
    while(ptr !== null) {
      if(comparator(ptr.value, prev) === 0) {
        let temp = ptr.next;
        ptr.next = new LinkNode<T>(item);
        ptr.next.next = temp;
        temp = null;
        break;
      }
      ptr = ptr.next;
    }
    if(ptr === null) {
      throw new Error('prev node is not found');
    }
  }
}

// const array: number[] = [1, 2, 3, 4, 5];
// const linkList = new LinkList<number>(array);

// linkList.insert(4, 6);
// console.log(linkList.head)
