import { BinaryTreeNode } from "../index";

export interface BinaryTree<T> {
  value: T;
  left: BinaryTree<T> | null,
  right: BinaryTree<T> | null,
}

export const preOrderTransversalRecursion = <T>(bt: BinaryTree<T>, callback?: (val: T) => void): void => {
  if(bt === null) return;
  if(typeof callback === 'function') {
    callback(bt.value);
  }
  if(bt.left) {
    preOrderTransversalRecursion(bt.left, callback);
  }
  if(bt.right) {
    preOrderTransversalRecursion(bt.right, callback);
  }
};

export const preOrderTransversal = <T>(bt: BinaryTree<T>, callback: (val: T) => void): void => {
  if(bt === null) return;
  const stack = [];
  stack.push(bt);
  while(stack.length > 0) {
    const node = stack.pop();
    if(typeof callback === 'function') {
      callback(node!.value);
    }
    if(node !== null) {
      if(node?.right) stack.push(node.right);
      if(node?.left) stack.push(node.left);
    }
  }
};

