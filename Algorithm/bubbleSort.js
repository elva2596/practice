/**
 *冒泡排序:
 *最好情况:o(n)
 *一般情况:o(n²)
 *最差情况:o(n²)
 *思想:相邻两两比较进行交换
 *稳定性:稳定
 */

function swamp(arr,i,j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function bubbleSort(arr){
  const len = arr.length;
  for(let i=0;i<len;i++){
    for(let j=0;j<len-i-1;j++){
      if(arr[j]>arr[j+1]){
        swamp(arr,j,j+1)
      }
    }
  }
  return arr;
}

const arr = [1,2,45,3,31,21,6]
console.log(bubbleSort(arr))