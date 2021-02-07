import { getDefaultFormatCodeSettings } from 'typescript';
import { partition } from './quick-sort';
const quickSelect = (array: number[], begin: number, end: number, idx: number): number => {
  idx = idx - 1;
  const mid = partition(array, begin, end);
  if((mid - begin) === idx) return array[mid];
  if((mid - begin) > idx) {
    return quickSelect(array, begin, mid - 1, idx + 1);
  } else {
    return quickSelect(array, mid + 1, end, idx - (mid - begin));
  }
}

export default quickSelect;
