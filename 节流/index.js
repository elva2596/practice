/**
 * 一、使用时间戳，一开始就执行一次，停止后不会执行。


function throttle(fn,wait) {
  let previous = 0;
  return () => {
    const now = new Date();
    args = arguments;
    if(now - previous > wait){
      fn.apply(this,args)
      previous = now;
    }
  }
}
 */

/**
 * 二、使用定时器，一开始n秒后执行，停止以后再执行一次

function throttle(fn,wait) {
  let timer;
  return () => {
    args = arguments;
    if(!timer){
      timer = setTimeout(()=>{
        timer = null;
        fn.apply(this,args)
      },wait)
    }
  }
}
 */

/**
 * 三、时间戳+定时器，
 */

 function throttle(fn,wait) {
  let timer, previous = 0,args;
  const later = () => {
    timer = null;
    previous = new Date();
    fn.apply(this,args);
  }
  return () => {
    const now = new Date();
    // console.log(now)
    // console.log(previous)
    console.log(now - previous)
    const last = wait - (now - previous)
    console.log(last)
    args = arguments
    if(last<=0||last>wait){
      
      if(timer){
        clearTimeout(timer)
        timer = null;
      }
      previous = now;
      fn.apply(this,args)
    }else if(!timer){
      timer = setTimeout(later,last)
    }
  }
 }
let count = 1;
const container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
}
container.addEventListener('mousemove', throttle(getUserAction,1000))