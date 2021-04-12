import { BinaryTreeNode } from "..";

export interface BinaryTree<T> {
  value: T;
  left: BinaryTree<T> | null,
  right: BinaryTree<T> | null,
}

export const preOrderTranversalRecursion = <T>(bt: BinaryTree<T>, callback?: (val: T) => void): void => {
  if(bt === null) return;
  if(typeof callback === 'function') {
    callback(bt.value);
  }
  if(bt.left) {
    preOrderTranversalRecursion(bt.left, callback);
  }
  if(bt.right) {
    preOrderTranversalRecursion(bt.right, callback);
  }
}

export const preOrderTranversal = <T>(bt: BinaryTree<T>, callback: (val: T) => void): void => {
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
}

