/**
 * merge two sorted arrays, and make it be one array which is sorted.
 * @param left the first sorted array
 * @param right the oother sorted array
 */

 let count = 0;
const merge = (left: number[], right: number[]) => {
  let ptr_left = 0;
  let ptr_right = 0;
  const res = [];
  while(ptr_left < left.length && ptr_right < right.length) {
    if(left[ptr_left] <= right[ptr_right]) {
      res.push(left[ptr_left]);
      ptr_left++;
    } else {
      res.push(right[ptr_right]);
      count += (left.length - ptr_left);
      ptr_right++;
    }
  }
  if(ptr_left === left.length) {
    while(ptr_right < right.length) res.push(right[ptr_right++]);
  } else {
    while(ptr_left < left.length) res.push(left[ptr_left++]);
  }
  return res;
}
/**
 * merge sort
 * time complexity, O(nlog n)
 * @param arr 
 * @return a branch new array which is soted withour sharing space 
 */
const mergeSort = (arr: number[]): number[] => {
  if(arr.length <= 1) return arr;
  const mid = Math.floor((0 + arr.length) / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

const ds = [4, 5, 6, 1, 2, 3]
const a = mergeSort(ds);

console.log(a, count)

// export default mergeSort;
