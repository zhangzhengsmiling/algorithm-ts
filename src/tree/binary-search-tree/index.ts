import in_order from "../tranversal/in-order";
export class TreeNode<DataType> {
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

  public reset() {
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  public isLeftChild() {
    if (this.parent === null) return false;
    if (this.parent.left === this) return true;
    else return false;
  }

  public isRightChild() {
    if (this.parent === null) return false;
    else return !this.isLeftChild();
  }

  public isRoot() {
    return this.parent === null;
  }

  public isLeafNode() {
    return this.left === null && this.right === null;
  }

}

export default class BinarySearchTree<DataType> {
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
    let target = this.find(key);
    if (target === null) return false;
    if (target.isLeafNode()) {
      // 目标节点没有子节点的情况
      if (target.isRoot()) {
        this.root = null;
      } else {
        const flag = target.isLeftChild() ? 'left' : 'right';
        target.parent[flag] = null;
        target.parent = null;
      }
    } else if(target.left !== null && target.right !== null) {
      const next = this._next(target);
      const flag = next.isLeftChild() ? 'left' : 'right';
      next.parent[flag] = next.right;
      if (target.isRoot()) {
        this.root = next;
      } else {
        const parentFlag = target.parent.left === target ? 'left' : 'right';
        target.parent[parentFlag] = next;
      }
      next.left = target.left;
      next.right = target.right;
      next.parent = target.parent;
      target.left && (target.left.parent = next);
      target.right && (target.right.parent = next);
      target.reset();
    } else {
      // 有且仅有左子节点或者右子节点
      const targetFlag = target.left === null ? 'right' : 'left';
      const targetParent = target.parent;
      if (target.isRoot()) {
        // 根节点
        this.root = target[targetFlag];
      } else {
        const parentFlag = target.isLeftChild() ? 'left' : 'right';
        const parent = target.parent;
        parent[parentFlag] = target[targetFlag];
      }
      target[targetFlag].parent = targetParent;
      target.reset();
    }
    target = null;
    return true;
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
      // 节点node存在右子树
      return this._min(node.right);
    } else {
      let ptr = node;
      while(ptr.parent !== null && ptr !== ptr.parent.left) {
        ptr = ptr.parent;
      }
      return ptr.parent;
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
bst.insert(17, 17);
bst.insert(5, 5);
bst.insert(2, 2);
bst.insert(11, 11);
bst.insert(9, 9);
bst.insert(16, 16);
bst.insert(7, 7);
bst.insert(8, 8);
bst.insert(35, 35);
bst.insert(29, 29);
bst.insert(38, 38);
in_order(bst.root, item => console.log(item.key));
bst.delete(7);
console.log('--------------------')
in_order(bst.root, item => console.log(item.key));
