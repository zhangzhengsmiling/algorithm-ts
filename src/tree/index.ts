
export class BinaryTreeNode<DataType> {
  public val: DataType;
  public left: BinaryTreeNode<DataType> | null;
  public right: BinaryTreeNode<DataType> | null;

  constructor (val: DataType) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

}

/**
 * 二叉树
 */
class BinaryTree<DataType> {
  public root: BinaryTreeNode<DataType> | null;
  
  constructor (datalist?: DataType[]) {
    if(typeof datalist === 'undefined') {
      this.root = null;
      return;
    }
    this.root = this.init(datalist);
  }

  public init (datalist: (DataType | null)[]): BinaryTreeNode<DataType> | null {
    if(datalist.length === 0) return null;
    const temp = [null, ...datalist].map(val => val === null ? null : new BinaryTreeNode<DataType>(val));
    for(let i = 1; i < temp.length; i++) {
      const node = temp[i];
      const leftIdx = i * 2;
      const rightIdx = i * 2 + 1;
      const leftChild = temp[leftIdx];
      const rightChild = temp[rightIdx];
      if((node === null) && (leftChild || rightChild)) {
        throw new Error('data error, please checkout tree node list...');
      }
      if(node !== null) {
        node.left = leftChild || null;
        node.right = rightChild || null;
      }
    }
    this.root = temp[1];
    return this.root;
  }

  // 二叉树前序遍历
  public preOrder = (callback?: (val?: DataType) => void) => {
    this.recursion(this.root, callback);
  };

  public recursion = (root: BinaryTreeNode<DataType> | null, callback?: (val?: DataType) => void) => {
    if (root === null) return;
    if(typeof callback === 'function') {
      callback(root.val);
    }
    if(root !== null) {
      this.recursion(root.left, callback);
      this.recursion(root.right, callback);
    }
  };
}

export default BinaryTree;
