
export class TTreeNode<DataType> {
  key: number;
  value: DataType;
  left: TTreeNode<DataType> | null;
  right: TTreeNode<DataType> | null;
  constructor(key: number, value: DataType) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default function in_order(root, callback) {
  if(!root) return;
  const stack = [root];
  let ptr = root.left;
  while(stack.length > 0 || ptr !== null) {
    while(ptr) {
      stack.push(ptr);
      ptr = ptr.left;
    }
    const target = stack.pop();
    // console.log(target.key);
    callback(target);
    ptr = target.right;
  }
}

