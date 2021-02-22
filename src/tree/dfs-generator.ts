const dfsGenerator = <T>(dfsKey: keyof T) => {
  const dfs = (tree: T | null, callback?: (v: T | null) => void) => {
    if(tree === null || tree === undefined) return;
    const children = tree[dfsKey]
    if(typeof callback === 'function') {
      callback(tree)
    }
    if(children instanceof Array && children.length > 0) {
      children.forEach(item => {
        dfs(item, callback);
      })
    }
  }
  const dfsByStack = (tree: T | null, callback?: (v: T | null) => void) => {
    if(tree === null || tree === undefined) return;
    const stack: T[] = [];
    stack.push(tree);
    while(stack.length !== 0) {
      const temp = stack.pop() as T;
      const children = temp[dfsKey];
      if(typeof callback === 'function') {
        callback(temp);
      }
      if(children instanceof Array && children.length > 0) {
        for(let i = children.length - 1; i >= 0; i--) {
          stack.push(children[i]);
        }
      }
    }
  }
  return dfsByStack;
}

export default dfsGenerator;
