// import timer from '../utils/timer';

const insertionSort = (arr: number[]) => {
  for(let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let idx = i - 1;
    while(temp < arr[idx] && idx >= 0) {
      arr[idx + 1] = arr[idx];
      idx--;
    }
    arr[++idx] = temp;    
  }
}
// const COUNT = 1000;
// const arr = new Array(COUNT);
// for(let i = 0; i < COUNT; i++) {
//   arr[i] = Math.random() * 10000 + 1;
// }
// insertionSort(arr);
// const t = timer(insertionSort, { loggerMode: true })(arr);

export default insertionSort;
