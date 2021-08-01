
const root = {
  value: 100,
  left: {
    value: 200,
    left: null,
    right: null,
    parent: null,
  },
  right: {
    value: 300,
    left: null,
    right: null,
    parent: null,
  }
}

// root.left.parent = root;
// root.right.parent = root;

// let child_ptr = root.left;
// const bool = child_ptr.parent === root
// console.log(bool === true);
// console.log(root.left.parent);


// interface TreeNode<DataType> {
//   key: number;
//   value: DataType;
//   left: TreeNode<DataType> | null;
//   right: TreeNode<DataType> | null;
//   parent: TreeNode<DataType> | null;
// }

class TreeNode<DataType> {
  public key: number;
  public value: DataType;
  public left: TreeNode<DataType> | null;
  public right: TreeNode<DataType> | null;
  public parent: TreeNode<DataType> | null;

  constructor(key: number, value: DataType) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class BinarySearchTree<DataType> {
  root: TreeNode<DataType> = null;

  insert(key: number, value: DataType) {
    const node: TreeNode<DataType> = new TreeNode<DataType>(key, value);
    if(this.root === null) return this.root = node;
    let ptr = this.root;
    let _p: TreeNode<DataType> | null = null;
    while(ptr !== null) {
      _p = ptr;
      if (key < ptr.key) ptr = ptr.left;
      else ptr = ptr.right;
    }
    node.parent = _p;
    if(key < _p.key) _p.left = node;
    else _p.right = node;
  }

}

const bst = new BinarySearchTree<number>();
bst.insert(100, 100);
bst.insert(200, 200);
bst.insert(300, 300);
bst.insert(150, 150);
console.log(bst.root);
