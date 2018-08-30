function Promises(fn) {
   var state = 'pending',
     value = null,
     callbacks = [];
   this.then = function (onFulfilled) {
     return new Promises(function (resolve) {
       handle({
         onFulfilled: onFulfilled || null,
         resolve: resolve
       });
     });
   };

   function handle(handler) {
     if (state === 'pending') {
       // callbacks总是取自前一个实例，因为闭包
       callbacks.push(handler);
       return;
     }

     /*
     	如果没有给then传递任何值,那么就把当前的value传递给下一个resolve
     	，让一个promise实例中value和上一次promise实例中的value相等
      */
     if (!handler.onFulfilled) {
       handler.resolve(value);
       return;
     }
     /*
     	这里可以让resolve之后才注册进来的回调立即执行
      */
     var ret = handler.onFulfilled(value);
     handler.resolve(ret);
   }

   function resolve(newValue) {
     if (newValue && typeof newValue.then === 'function') {
       /*
       		这里的作用就是将外层的promise 的value值替换成内层promise的resolve值
        */
       newValue.then(resolve);
       return;
     }
     state = 'fulfilled';
     value = newValue;
     /*
     	这里添加延时的原因是防止resolve执行完（也就是resolve里面都是同步代码的时候），
     	then的回调还没有注册进来
      */
     setTimeout(function () {
       callbacks.forEach(function (handler) {
         handle(handler);
       });
     }, 0);
   }
   fn(resolve);
}

const p1 = new Promises((resolve) => {
  setTimeout(()=>{resolve("p1")},1000);
  // resolve("fulfilled");

});
const p2 = p1.then((val) => {
   return new Promises((resolve) => {
     resolve("p3")
   })
})


// 模拟Promise异步操作成功执行之后，调用then的回调不成功情况(解决方法:加入状态)
// setTimeout(() => {
  p2.then((val) => console.log(val))
// }, 2000);
