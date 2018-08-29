/**
 * 一、双层循环


function unique(arr){
 const res = [];
 for(var i=0,len = arr.length;i<len;i++){
   for(var j=0,reslen = res.length;j<reslen;j++){
     if(arr[i]===res[j]){
       break;
     }
   }
   if(j===reslen){
     res.push(arr[i])
   }
 }
 return res;
}
 */


 /**
  * 二、使用数组的filter

const arr = [1, 1, '1', '1'];
function unique(arr) {
  return arr.filter((item,index,arr) => {
    return arr.indexOf(item) === index;
  })
}
  */
/**
 * 三、使用键值对,但是无法区分1和'1',因为对象的键值是字符串，
 * 1.但是可以使用typeof item +item来区分
 * 2.但是无法区分{name:'a'}和{name:'b'},因为结果都是object[object object],但是可以使用JSON.stringify
 */
function unique(arr) {
  const obj = {};
  return arr.filter((item) => {
    // console.log(item+'1')
    // return obj.hasOwnProperty(item) ?false:(obj[item] = true)
    // return obj.hasOwnProperty(typeof item + item) ? false : obj[typeof item + item] = true;
    return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : obj[typeof item + JSON.stringify(item)] = true;
  })
}
const arr = [1, 1, '1', '1',{name:"a"},{name:'a'}];

console.log(unique(arr));