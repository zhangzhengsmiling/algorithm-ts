import { partition } from './partition';

const quickSort = (array: number[], begin: number, end: number) => {
  if(begin >= end) return;
  const mid = partition(array, begin, end);
  quickSort(array, begin, mid - 1);
  quickSort(array, mid + 1, end);
};

export default quickSort;
