/**
 * 防抖:
 *  原理:在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
 */

 function debounce(fn,wait) {
    let timer = null, timestamp, args;
    const later = () => {
      const now = new Date();
      const last = now - timestamp;
      if(last<wait&&last>=0){
        timer = setTimeout(later,wait - last);
      }else{ 
        timer = null;
        fn.call(this,args);
      }
    }

    return (e) => {
      args = e;
      timestamp = new Date();
      if (!timer) {
        timer = setTimeout(later, wait);
      }
    }
 }

 function showVal(e) {
   const oVal = document.querySelector('#val').value;
   console.log(e,oVal);
 }
 const inp = document.querySelector('#val');
 inp.addEventListener('input',debounce(showVal,100));
let count = 1;
const container = document.getElementById('container');
function getUserAction() {
  container.innerHTML = count++;
}
container.addEventListener('mousemove',getUserAction)