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

export default insertionSort;
