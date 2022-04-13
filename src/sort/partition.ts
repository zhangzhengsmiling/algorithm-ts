/**
 * 生成随机值
 * 辅助随机快排算法
 * @param start range of random number
 * @param end 
 */
const random = (start: number, end: number) => {
  return Math.floor(start + Math.random() * (end - start + 1));
};

/**
 * 交换数组中的两个元素位置
 * @param array 数组引用值
 * @param index1 下标
 * @param index2 下标
 */
const swapArray = (array: number[], index1: number, index2: number) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};
/**
 * partition algorithm
 * 声明两个指针，分别从数组左右两端扫描，
 * 双指针扫描
 */
export const partition = (array: number[], begin: number, end: number) => {
  if(array.length === 0) return begin;
  // 随机生成一个下标作为主元，与begin值交换，随机化快排过程
  const pivotIdx = random(begin, end);
  swapArray(array, pivotIdx, begin);
  const pivot = array[begin];
  let ptrLeft = begin;
  let ptrRight = end;
  while(ptrLeft < ptrRight) {
    while(ptrRight > ptrLeft && array[ptrRight] >= pivot) ptrRight--;
    array[ptrLeft] = array[ptrRight];
    while(ptrLeft < ptrRight && array[ptrLeft] <= pivot) ptrLeft++;
    array[ptrRight] = array[ptrLeft];
  }
  array[ptrLeft] = pivot;
  return ptrLeft;
};

/**
 * 单指针从左到右扫描，遇到小于pivot的值
 * 将其置换到数组左侧
 */
export const partition2 = (array: number[], begin: number, end: number) => {       
  const pivotIdx = random(begin, end);
  swapArray(array ,pivotIdx, end);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              + 1;
  const pivot = array[end];
  let  ptrLeft = begin - 1;
  for(let ptrRight = begin; ptrRight < end; ptrRight++) {
    if(array[ptrRight] < pivot) {
      ptrLeft++;
      swapArray(array, ptrLeft, ptrRight);
    }
  }
  swapArray(array, ptrLeft + 1, end);
  return ptrLeft + 1;
};
