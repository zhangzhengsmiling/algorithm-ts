class MaxHeap {
  maxHeapify = (arr: number[], idx: number) => {
    const recursion = (arr: number[], idx: number) =>{
      let idx_left = idx * 2;
      let idx_right = idx * 2 + 1;
      let idx_largest = idx;
      if(idx_left < arr.length && arr[idx_left] > arr[idx]) {
        idx_largest = idx_left;
      }
      if(idx_right < arr.length && arr[idx_largest] < arr[idx_right]) {
        idx_largest = idx_right;
      }
      if(idx_largest !== idx) {
        let temp = arr[idx_largest];
        arr[idx_largest] = arr[idx];
        arr[idx] = temp;
        recursion(arr, idx_largest);
      }
    }
    arr.unshift(0);
    recursion(arr, idx + 1);
    arr.shift();
    return arr;
  }

}

const arr = [1, 2, 3];
const mh = new MaxHeap();
mh.maxHeapify(arr, 0);
console.log(arr);

