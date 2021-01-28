
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
  
  constructor (root?: BinaryTreeNode<DataType>) {
    this.root = root || null;
  }

  public init (dataList: DataType[]): BinaryTreeNode<DataType> | null {
    if(dataList.length === 0) return null;
    const binaryTreeNodeList = dataList.map(val => val === null ? null : new BinaryTreeNode<DataType>(val));
    binaryTreeNodeList.forEach((node, index) => {
      const leftIdx = index * 2 - 1;
      const rightIdx = index * 2 + 1;
      const leftChild = binaryTreeNodeList[leftIdx];
      const rightChild = binaryTreeNodeList[rightIdx];
      if(node === null && (leftChild || rightIdx)) {
        throw new Error('data error, please checkout tree node list...');
      }
      if(node !== null) {
        node.left = leftChild || null;
        node.right = rightChild || null;
      }
    })
    this.root = binaryTreeNodeList[0];
    return this.root;
  }

  private preOrder = (root: BinaryTreeNode<DataType> | null, callback?: (val?: DataType) => void) => {
    if (root === null) return;
    if(typeof callback === 'function') {
      callback(root.val);
    }
    if(root !== null) {
      this.preOrder(root.left);
      this.preOrder(root.right)
    }
  }
}

const bh = new BinaryTree<number>();
const temp = bh.init([1, 2, 3]);
console.log(temp)

export default BinaryTree;
