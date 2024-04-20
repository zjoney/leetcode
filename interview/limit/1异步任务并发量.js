/**控制请求最大并发数，前面的请求成功后，再发起新的请求
 * 异步任务并发量
 * @param {*} limit 限制并发数
 * @param {*} items 异步函数队列
 */
 const asyncPool = async ({ limit, items }) => {
  const promises = []
  const pool = new Set()
  for (let item of items) {
    debugger
    const fn = async item => await item()
    const promise = fn(item) // 返回的是promise对象
    promises.push(promise)
    pool.add(promise)
    const clean = () => pool.delete(promise)
    promise.then(clean, clean)// 失败自从重发
    if (pool.size >= limit) {
      await Promise.race(pool)
    }
  }
  return Promise.all(promises)
}
 const sleep = (n, name = 'test') => {
  return new Promise((resolve) => {
    console.log(n, name, 'start')
    setTimeout(() => {
      resolve({ n, name })
    }, n * 1000)
  })
}
 const start = async () => {
  await asyncPool({
    limit: 2,
    items: [
      () => sleep(1, '吃饭'),
      () => sleep(3, '睡觉'),
      () => sleep(5, '打游戏'),
      () => sleep(3.5, '学习算法'),
      () => sleep(4, '学习Vue  React'),
    ]
  })
  console.log('结束啦')
}
start()

// const items = [6,7,8]
// const items = [{a:2},{b:6}]
// for (let item of items){ 
//   console.log(item)
// }