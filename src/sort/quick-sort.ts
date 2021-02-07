import { forEachTrailingCommentRange } from "typescript";

/**
 * 生成随机值
 * 辅助随机快排算法
 * @param start range of random number
 * @param end 
 */
const random = (start: number, end: number) => {
  return Math.floor(start + Math.random() * (end - start + 1));
}

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
}

/**
 * partition algorithm
 * 声明两个指针，分别从数组左右两端扫描，
 * 左指针找到第一个比pivot大的值，右指针找到第一个比pivot小的值，交换两者位置
 */
export const partition = (array: number[], begin: number, end: number) => {
  if(array.length === 0) return begin;
  // 随机生成一个下标作为主元，与begin值交换，随机化快排过程
  const idx_pivot = random(begin, end);
  swapArray(array, idx_pivot, begin);
  const pivot = array[begin];
  let ptr_left = begin + 1;
  let ptr_right = end;
  while(ptr_left < ptr_right) {
    while(ptr_left < ptr_right && array[ptr_left] < pivot) ptr_left++;
    while(ptr_right > ptr_left && array[ptr_right] > pivot) ptr_right--;
    swapArray(array, ptr_left, ptr_right)
  }
  if(pivot < array[ptr_left]) {
    ptr_left--;
  }
  swapArray(array, begin, ptr_left);
  return ptr_left;
}

/**
 * 单指针从左到右扫描，遇到小于pivot的值
 * 将其置换到数组左侧
 */
const partition2 = (array: number[], begin: number, end: number) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     + 1;
  const pivot = array[end];
  let  ptr_left = begin - 1;
  for(let ptr_right = begin; ptr_right < end; ptr_right++) {
    if(array[ptr_right] < pivot) {
      ptr_left++;
      swapArray(array, ptr_left, ptr_right);
    }
  }
  swapArray(array, ptr_left + 1, end);
  return ptr_left + 1;
}

const quickSort = (array: number[], begin: number, end: number) => {
  if(begin >= end) return;
  const mid = partition(array, begin, end);
  quickSort(array, begin, mid - 1);
  quickSort(array, mid + 1, end);
}

export default quickSort;
