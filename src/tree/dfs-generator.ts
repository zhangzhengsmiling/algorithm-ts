
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
  return dfs;
}

export default dfsGenerator;
