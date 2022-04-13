const bfsGenerator = <T>(bfsKey: keyof T) => {
  const bfs = (tree: T | null, callback?: (v: T | null) => void) => {
    if(tree === null || tree === undefined) return;
    const queue: T[] = [];
    queue.push(tree);
    while(queue.length > 0) {
      const temp = queue.shift() as T;
      const children = temp![bfsKey];
      if(typeof callback === 'function') {
        callback(temp);
      }
      if(children instanceof Array) {
        children.forEach((item: any) => {
          queue.push(item);
        });
      }
    }
  };
  return bfs;
};

export default bfsGenerator;
