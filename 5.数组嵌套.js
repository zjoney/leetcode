/**
 * 数组嵌套
 */
 var arrayNesting = function(arr) {
  let initVal = 0, len = arr.length;
  for (let i = 0; i < len; ++i) {
      let count = 0;
      while (arr[i] < len) {
          const num = arr[i];
          arr[i] = len;
          i = num;
          ++count;
      }
      initVal = Math.max(initVal, count);
  }
  return initVal;
};
