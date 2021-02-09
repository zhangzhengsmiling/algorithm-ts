import LinkList, { LinkNode } from '../link-list';

interface IUser {
  id: number;
}

describe('link-list test suite:', () => {
  it('module link-node import:', () => {
    expect(LinkNode).toBeInstanceOf(Function);
  });
  
  it('module link-list import:', () => {
    expect(LinkList).toBeInstanceOf(Function);
  });

  it('link list init function test:', () => {
    const array: number[] = [1, 2, 3, 4, 5];
    const linkList = new LinkList<number>(array);
    
    const res = new LinkNode<number>(1);
    let ptr = res;
    ptr.next = new LinkNode<number>(2);
    ptr = ptr.next;
    ptr.next = new LinkNode<number>(3);
    ptr = ptr.next;
    ptr.next = new LinkNode<number>(4);
    ptr = ptr.next;
    ptr.next = new LinkNode(5);
    expect(linkList.head).toEqual(res);
  });

  it('link node add without comparator:', () => {
    const array: number[] = [1, 2, 3, 4, 5];
    const linkList = new LinkList<number>(array);
    linkList.insert(4, 6);
    const temp = new LinkList<number>([1, 2, 3 ,4, 6, 5]);
    expect(linkList.head).toEqual(temp.head);
  });

  it('link node add, not find prev node:', () => {
    const array: number[] = [1, 2, 3, 4, 5];
    const linkList = new LinkList<number>(array);
    try {
      linkList.insert(6, 67);
    } catch(err) {
      expect(err.message).toBe('prev node is not found');
    }
  });

  it('link node add with comparator:', () => {
    const array: IUser[] = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ];
    const linkList = new LinkList<IUser>(array, (a: IUser, b: IUser) => a.id - b.id);
    linkList.insert({id: 3}, {id: 8});
    const temp = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 8 },
      { id: 4 },
    ];
    expect(linkList.head).toEqual(new LinkList<IUser>(temp).head);
  });

  it('link node remove:', () => {
    const array: IUser[] = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ];
    const linkList = new LinkList<IUser>(array, (a: IUser, b: IUser) => a.id - b.id);
    linkList.remove({id: 3});
    const temp = [
      { id: 1 },
      { id: 2 },
      { id: 4 },
    ];
    try {
      linkList.remove({id: 5});
    } catch(err) {
      expect(err.message).toBe('node is not found')
    }
    expect(linkList.head).toEqual(new LinkList<IUser>(temp).head);
  });

  it('link node search:', () => {
    const array = [1, 2, 3, 4, 5];
    const list = new LinkList<number>(array);
    const num = list.search(5);
    expect(num?.value).toBe(5);
    const numNotFound = list.search(8);
    expect(numNotFound).toBe(null);
    const users = [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
    ]
    const list2 = new LinkList<IUser>(users, (a, b) => a.id - b.id);
    const u = list2.search({id: 3});
    expect(u?.value).toEqual({id: 3});
    const uNotFound = list2.search({id: 6});
    expect(uNotFound).toBe(null);
  })
})
