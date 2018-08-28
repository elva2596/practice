/**
 * 防抖:
 *  原理:让一个函数在一段间隔内没有被调用时，才开始执行被调用方法。
 */

 function debounce(fn,wait) {
    let timer = null, timestamp, args;
    const later = () => {
      const last = new Date() - timestamp;
      if(last<wait&&last>=0){
        timer = setTimeout(later,wait - last);
      }else{
        timer = null;
        fn.call(this,args)
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
