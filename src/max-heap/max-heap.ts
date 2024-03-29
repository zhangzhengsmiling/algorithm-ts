class MaxHeap {
  maxHeapify = (arr: number[], idx: number) => {
    const recursion = (arr: number[], idx: number) =>{
      const idx_left = idx * 2;
      const idx_right = idx * 2 + 1;
      let idx_largest = idx;
      if(idx_left < arr.length && arr[idx_left] > arr[idx]) {
        idx_largest = idx_left;
      }
      if(idx_right < arr.length && arr[idx_largest] < arr[idx_right]) {
        idx_largest = idx_right;
      }
      if(idx_largest !== idx) {
        const temp = arr[idx_largest];
        arr[idx_largest] = arr[idx];
        arr[idx] = temp;
        recursion(arr, idx_largest);
      }
    };
    arr.unshift(0);
    recursion(arr, idx + 1);
    arr.shift();
    return arr;
  };

  /**
   * 构造大顶堆
   * @param arr 数组
   */
  build = (arr: number[]) => {
    const temp = [...arr];
    for(let i = Math.floor(temp.length / 2); i >= 0; i--) {
      this.maxHeapify(temp, i);
    }
    return temp;
  };

  heapSort = (arr: number[]) => {
    const temp = [];
    arr = this.build(arr);
    while(arr.length > 0) {
      const _temp = arr[0];
      arr[0] = arr[arr.length - 1];
      arr[arr.length - 1] = _temp;
      temp.unshift(arr.pop());
      this.maxHeapify(arr, 0);
    }
    return temp;
  };

}

export default MaxHeap;
