import LinkList from '../link-list/link-list';

class ChainedHashTable {
  public hashTable: any[] = [];
  private hashFunction?: (val: any) => number;
  constructor(length: number, hashFunction?: (val: any) => number) {
    this.hashTable = new Array(length)
      .fill('')
      .map(() => new LinkList<any>([], (a: any, b: any) => a.key === b.key));
    this.hashFunction = hashFunction;
  }
  search(key: number) {
    const hashTable = this.hashTable;
    const hashFunction = this.hashFunction!;
    const idx = hashFunction(key);
    console.log(hashTable[idx]);
    if(idx >= hashTable.length) return null;
    if(hashTable[idx] !== null) {
      return hashTable[idx].search({key});
    } else {
      return null;
    }
  }
  insert = (key: any, value: any): boolean =>{
    const hashTable = this.hashTable;
    const hashFunction = this.hashFunction!;
    const idx = hashFunction(key);
    if(idx >= hashTable.length) return false;
    if(hashTable[idx] !== null) {
      hashTable[idx].add(value);
      return true;
    }
    return false;
  };
  remove(key: any) {
    const hashTable = this.hashTable;
    const hashFunction = this.hashFunction!;
    const idx = hashFunction(key);
    if(idx >= hashTable.length) return false;
    return hashTable[idx].remove({key});
  }
}
const a = {
  key: 9,
  value: 100
};
const b = {
  key: 2,
  value: 200
};

const cht = new ChainedHashTable(10, key => key - 1);
cht.insert(a.key, a);
cht.insert(b.key, b);
// const target = cht.search(a.key)
// console.log(target.value);
console.log(cht.hashTable);
cht.remove(a.key);
console.log(cht.hashTable);
// console.log(cht.search(a.key))
