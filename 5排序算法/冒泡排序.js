/**
 * https://www.runoob.com/w3cnote/bubble-sort.html
 * 比较两个相邻的数据大小，大的就下沉
 * 时间复杂度O(n²) 
 * @param {*} arr 
 * @returns 
 */
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
      for (var j = 0; j < len - 1 - i; j++) {
          if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
              var temp = arr[j+1];        // 元素交换
              arr[j+1] = arr[j];
              arr[j] = temp;
          }
      }
  }
  console.log(arr);
  return arr;
}
bubbleSort(['f', 'o', 'o', 'b', 'a', 'r', 'l', 'e', 'd']);