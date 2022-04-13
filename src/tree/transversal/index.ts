import in_order, { TTreeNode } from './in-order';
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
  
  const root: TTreeNode<string> | null = list[1];
  for(let i = 1; i < Math.floor(list.length / 2); i++) {
    list[i].left = list[left(i)];
    list[i].right = list[right(i)];
  }
  return root;
};

const tree = buildTree([
  6,
  4, 9,
  2, 5, 8, 11,
  1, 3, null, null, 7, null, 10, null
]);

const target = [];
in_order(tree, item => target.push(item.key));
console.log(target.toString());