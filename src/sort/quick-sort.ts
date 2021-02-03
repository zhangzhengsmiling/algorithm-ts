const partition = (array: number[], begin: number, end: number) => {
  if(array.length === 0) return begin;
  const target = array[begin];
  // console.log(array)
  let ptr_left = begin + 1;
  let ptr_right = end;
  while(ptr_left < ptr_right) {
    while(ptr_left < ptr_right && array[ptr_left] < target) ptr_left++;
    while(ptr_right > ptr_left && array[ptr_right] > target) ptr_right--;
    const temp = array[ptr_left];
    array[ptr_left] = array[ptr_right];
    array[ptr_right] = temp;
  }
  if(target < array[ptr_left]) {
    ptr_left--;
  }
  const temp = array[begin];
  array[begin] = array[ptr_left];
  array[ptr_left] = temp;
  return ptr_left;
}

const quickSort = (array: number[], begin: number, end: number) => {
  if(begin >= end) return;
  const mid = partition(array, begin, end);
  quickSort(array, begin, mid - 1);
  quickSort(array, mid + 1, end);
}

export default quickSort;
