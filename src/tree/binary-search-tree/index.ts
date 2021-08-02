
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

  find(key: number): TreeNode<DataType> {
    let ptr = this.root;
    while(ptr !== null) {
      if (key === ptr.key) return ptr;
      if (key < ptr.key) ptr = ptr.left;
      else ptr = ptr.right;
    }
    throw new Error(`key: ${key} is not found...`);
  }

  search(key: number): DataType {
    const target = this.find(key);
    return target.value;
  }

  delete(key: number): boolean {
    const target = this.find(key); // 此处假设可以找到
    const parent = target.parent,
    left = target.left,
    right = target.right;

    if (target.left === null && target.right === null) {
      // 左子节点
      if (target.parent.left === target) target.parent.left = null;
      else if (target.parent.right === target) target.parent.right = null;
      return true;
    } else if (target.left !== null && target.right !== null) {
      // target节点既有左节点又有右节点
      const next = this._min(target.right);
      next.parent = parent;
      next.left = left;
      next.right = right;
      return true;
    } else {
      // 只有左子节点或者右子节点
      const next = target.left || target.right;
      if (target.parent === null) this.root = next;
      else if(target.parent.left === target) target.parent.left = next;
      else if(target.parent.right === target) target.parent.right = next;
      next.parent = parent;
      // console.log(this.root)
      return false;
    }
    
    // const target = this.find(key);
    // let parent = target.parent;
    // const replaceNode = this._prev(target) || this._next(target);
    // if (parent.left === target) {
    //   // target为左子节点
    //   parent.left = replaceNode;
    //   replaceNode.parent = parent;
    // } else {
    //   parent.right = replaceNode;
    //   replaceNode.parent = parent;
    // }
  }

  _max(node: TreeNode<DataType>): TreeNode<DataType> {
    let ptr = node;
    let p = null;
    while(ptr !== null) {
      p = ptr;
      ptr = ptr.right;
    }
    return p;
  }

  _min(node: TreeNode<DataType>): TreeNode<DataType> {
    let ptr = node;
    let p = null;
    while(ptr !== null) {
      p = ptr;
      ptr = ptr.left;
    }
    return p;
  }

  // 计算节点的后继节点
  _next(node: TreeNode<DataType>): TreeNode<DataType> {
    if (node === null) return null;
    if (node.right !== null) {
      return this._min(node.right);
    } else {
      return node.parent;
    }
  }

  // 计算节点的前驱节点
  _prev(node: TreeNode<DataType>): TreeNode<DataType> {``
    if (node === null) return null;

    // node存在左子节点
    if (node.left !== null) {
      return this._max(node.left);
    } else {
      // return 
      // if node is left node:  
      // if node is right node: return node.parent
      if (node.parent === null) return null;
      if (node.parent.right === node) {
        // node为右子节点
        return node.parent;
      } else {
        let ptr = node;
        while(ptr.parent.left === ptr) {
          ptr = ptr.parent;
        }
        // console.log(node.parent);
        return ptr.parent;
      }
    }
  }
}

const bst = new BinarySearchTree<number>();


// bst.insert(100, 100);
// bst.insert(60, 60);
// bst.insert(64, 64);
// bst.insert(68, 68);
// bst.insert(80, 80);
// bst.insert(90, 90);

bst.insert(100, 100);
bst.insert(200, 200);
bst.insert(170, 170);
// bst.insert(160, 160);
// bst.insert(140, 140);

// console.log(bst.root);
const node = bst.root;

// const node = bst.root.left.right.right.right.right;
bst.delete(200);
console.log(bst.root)
// console.log(bst._prev(node));
// const prev = bst._prev(node)
// console.log(prev);

// bst.delete(170);
// console.log(bst.root);
// bst.delete(200);
// console.log(bst.root);
// bst.delete(100);
// console.log(bst.root);

// console.log(bst.root);
// console.log(bst.root);
// console.log(bst._max(bst.root));
// console.log(bst._min(bst.root));
// console.log(bst._next(bst.root));
// const value = bst.search(150);
// console.log(value)

