/**
 * 1.含义:Promise是异步编程的一种解决方案
 * 2.特点:
 *  1)Promise对象有三种状态:pending、fulfilled、rejected
 *  2)状态一旦改变，就不会再改变:pending -> fulfilled pending -> rejected
 * 3.缺点:
 *  1)无法被取消，Promise一旦被创建就立即执行，无法取消
 *  2）Promise内部抛出的错误如果不设置回调，不会反映到外部
 *  3）处于pending是无法得知状态(刚开始还是即将完成)
 *  4）并不能解决回调嵌套问题
 */

/**
 * 例一
 */
function timeout(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms,"done")
    })
}

timeout(100).then((val) => {
    console.log(val)
})

// Promise一旦被创建，就会立即执行
const promise = new Promise((resolve,reject) => {
  console.log("promise")
  resolve()
})

promise.then(() => {
  console.log('resolved')
})
console.log('hi');

/**
 * 异步加载图片
 */
 function loadImgAsync(url) {
  const image = new Image();
  return new Promise((resolve,reject) => {
    image.onload = () => { resolve(image) }
    image.onerror = () => { reject(new Error('Could not load image at ' + url)) }
    image.src = url;
  })
 }

 loadImgAsync('https://images.nowcoder.com/images/20180822/9284175_1534897113059_344616053EB3F7493BA3A4F350495E08@0e_100w_100h_0c_1i_1o_90Q_1x')
  .then((image) => {
    // 操作image对象
    document.body.appendChild(image)
    console.log(image);
  })
  .catch((err) => {
    console.log(err)
  })

  /**
   * Promise封装AJAX,支持GET/POST,异步，请求超时处理
   */

   function request(params={}) {
     const method = params.method||"GET";
     const args = params.args||{};
     const url = params.url;
     const timeout = params.timeout||5000
     const promise = new Promise((resolve, reject) => {
       const xhr = new XMLHttpRequest();
       //  xhr.open("GET",url);
       xhr.onreadystatechange = function () {
         if (this.readyState !== 4) {
           return
         }
         if (this.status === 200 && this.status < 300 || this.status === 304) {
           resolve(this.response)
         } else {
           reject(new Error(this.statusText));
         }
       }
       xhr.open(method, url, true);
       xhr.responseType = 'json';
       xhr.setRequestHeader('Content-Type', 'application/json')

       method === "GET" ? xhr.send() : xhr.send(args);

     })

     const timeouthandler = new Promise((resolve,reject) => {
       setTimeout(() => {
         reject(new Error(`timeout`))
       }, timeout)
     })
    //  使用Promise.race做一个超时调用
     return Promise.race([promise,timeouthandler])
   }

   request({method:'get',url:'http://39.106.216.187/api/exhibitions'})
    .then(res=> {
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })

  /**
   * Promise实例中resolve的也是一个promise实例
   */

   const p1 = new Promise((resolve,reject) => {
    //  setTimeout(() => reject(new Error('i am error')),3000)
     setTimeout(() => resolve('p1'),3000)
   })
   const p2 = new Promise((resolve,reject) => {
     setTimeout(() => resolve(p1),1000)
   })
   p2.then(re => {
     console.log(re)
   }).catch(err => {
     console.log(err)
   })

   /**
    * Promise.prototype.then方法return 的也是一个promise实例
    */

   const p3 = new Promise((resolve,reject) => {
    //  setTimeout(() => resolve('p3'),3000);
     setTimeout(() => reject(new Error("i am p3 error")),3000);
   })

  p1.then(() => {
    return p3
  }).then(re => {
    console.log(re)
  }).catch(err=>{
    // then方法在运行中抛出的错误也会被catch捕获，
    console.log(err)
  })

  const p4 = new Promise((resolve,reject) => {
    // reject<<=>>throw new Error()
    reject(new Error("i am error p4"))
    console.log(2222)
    throw new Error("i am error p4")
  })

  p4.catch(err=>{
    console.log(err)
  })

  // 如果没有指定catch方法，Promise内部的错误不会影响Promise外部代码的执行
  const p5 = new Promise((resolve,reject) => {
    resolve(x+2)
  })
  p5.then(re=>{
    console.log(re)

  })
  setTimeout(()=>{
    console.log('hhhh')
  },2000)


  // Promis.all中如果有一个promise实例有catch方法，则不会调用Promise.all的catch方法
  const pp1 = new Promise((resolve,reject) => {
    resolve('hello')
  }).then(result => result)
  .catch(e => e)

  const pp2 = new Promise((resolve,reject) => {
    throw new Error('报错了');
  })
  .then(result => result)
  .catch(e => e)

  Promise.all([pp1,pp2])
  .then(result => console.log(result))
  .catch(e => console.log(e))

  
