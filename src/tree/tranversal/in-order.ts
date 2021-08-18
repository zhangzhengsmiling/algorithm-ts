
class TTreeNode<DataType> {
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

// function in_order(root) {
//   if (root.left)
//       in_order(root.left);
  
//   console.log(root.key);
  
//   if (root.right)
//       in_order(root.right);
// }
/**
* 生成测试数据
**/
// 子节点索引计算
const left = idx => idx * 2;
const right = idx => idx * 2 + 1;

// 以层级遍历构造二叉树
const buildTree = (nums: (number | null)[]) => {
  // 控制下标从1开始
  const list = [null, ...nums].map(item => {
    if (item === null) {
      return null;
    } else {
      return new TTreeNode<string>(item, `data-${item}`);
    }
  });
  
  let root: TTreeNode<string> | null = list[1];
  for(let i = 1; i < Math.floor(list.length / 2); i++) {
    list[i].left = list[left(i)];
    list[i].right = list[right(i)];
  }
  return root;
}

const tree = buildTree([
  6, 4, 9, 2, 5, 8, 11, 1, 3, null, null, 7, null, 10, null
]);


function in_order(root) {
  if(!root) return;

  let stack = [root];
  let ptr = root.left;
  let _p = root;
  while(stack.length > 0 || ptr !== null) {
    while(ptr) {
      stack.push(ptr);
      ptr = ptr.left
    }
    let target = stack.pop();
    console.log(target.key);
    ptr = target.right;
  }
}

in_order(tree)
