/**
 * 0 异步并发数量
 * @param {*} limit 限制并发数量
 * @param {*} items 每次执行函数
 */
const asyncpool = async ({ limit, items }) => {
   const promises = [];
   const pool = new Set();
   for (let item of items) {
      const fn = async item => await item()
      const promise = fn(item);
      promises.push(promise)
      pool.add(promise)
      const clean = () => pool.delete(promise)
      promise.then(clean, clean)
      if (pool.size >= limit) {
         await Promise.race(pool)
      }
   }
   return Promise.all(promises)
}
const sleep = (n, name = 'test') => {
   return new Promise((resolve,) => {
      setTimeout(() => {
         console.log(n, name)
         resolve(n, name)
      }, n * 1000)
   })
}
const start = async () => {
   await asyncpool({
      limit: 2,
      items: [
         () => sleep(1, '吃饭'),
         () => sleep(3, '睡觉'),
         () => sleep(5, '打游戏'),
         () => sleep(2, '学习算法'),
         () => sleep(4, 'React or Vue'),
      ]
   })
}
start()
/**
 * 1 实现reduce
 * @param {*} fn 
 * @param {*} initiaValue 
 */
Array.prototype.myReduce = function (fn, initiaValue) {

}
/**
 * 20 后端一次性返回十万条数据
 * 采用分组分批分堆
 * @param {*} arr 
 * @returns resultArr
 */

const averageFn = (arr) => {
   let i = 0; // 1. 从第0个开始截取
   let result = []; // 2. 定义结果，结果是二维数组
   while (i < arr.length) { // 6. 当索引等于或者大于总长度时，即截取完毕
      // 3. 从原始数组的第一项开始遍历
      result.push(arr.slice(i, i + 5)); // 4. 在原有十万条数据上，一次截取4个用于分堆
      i = i + 5; // 5. 这4条数据截取完，再截取下十条数据，以此类推
   }
   return result; // 7. 最后把结果丢出去即可
}
//  创建定时器分批渲染
const plan = async () => {
   // this.loading = true;
   let resultArr=[]
   const res = [1,2,3,4,5,6,7,8,9,10,11]
   // await axios.get("http://ashuai.work:10000/bigData");
   // this.loading = false;
   let twoDArr = averageFn(res);
   for (let i = 0; i < twoDArr.length; i++) {
      // 相当于在很短的时间内创建许多个定时任务去处理
      setTimeout(() => {
         resultArr = [...resultArr, ...twoDArr[i]]; // 赋值渲染
         console.log(resultArr)
      }, 1000 * i); // 17 * i // 注意设定的时间间隔... 17 = 1000 / 60
      
   }
   
   return resultArr;
}
plan()

