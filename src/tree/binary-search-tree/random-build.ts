import BinarySearchTree, { TreeNode } from './index';
import fs from 'fs';

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const bst = new BinarySearchTree<string>();

while(list.length > 0) {
  const random = Math.floor(Math.random() * (list.length - 1));
  const item = list.splice(random, 1);
  bst.insert(item[0], `data-${item}`);
}

const dfs = (tree: TreeNode<string>, callback: any) => {
  const stack = [tree];
  while(stack.length > 0) {
    const item = stack.pop();
    callback(item);
    if (item.right) stack.unshift(item.right);
    if (item.left) stack.unshift(item.left);
  }
}

dfs(bst.root, item => delete item.parent);

console.log(JSON.stringify(bst.root));
fs.writeFileSync('./data.json', JSON.stringify(bst.root))
