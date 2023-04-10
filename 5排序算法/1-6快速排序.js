/**
 * 快速排序的最坏运行情况是 O(n²)，平均状况下要 Ο(nlogn)
 */
function partition(arr, low, high) {
  let pivot = arr[low]; // 称为 “基准”
  while (low < high) { // 满足条件就可以多次循环
    while (low < high && arr[high] > pivot) {
      --high;
    }
    arr[low] = arr[high];
    while (low < high && arr[low] <= pivot) {
      ++low;
    }
    arr[high] = arr[low];
  }
  arr[low] = pivot;
  return low;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
  return arr;
}
const arr = [9, 8, 7, 6, 5, 0, 1, 2, 3, 4];
console.log(quickSort(arr, 0, arr.length - 1))