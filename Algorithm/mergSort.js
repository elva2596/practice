/**
 *归并排序:
 *最好情况:o(nlogn)
 *一般情况:o(nlogn)
 *最差情况:o(nlogn)
 *思想:分治思想
 *稳定性:稳定
 */

function swamp(arr,i,j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function mergeSort(arr){
  const len = arr.length;
  if(len<=1) {return arr}
  const mid = Math.floor(len/2);
  const left = arr.splice(0,mid);
  const right = arr.splice(mid,right);
  return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right){
  let i = 0,j=0,result = [];
  while(i<left.length&&j<right.length){
    if(left[i]<right[j]){
      result.push(left[i++]);
    }else{
      result.push(right[j++]);
    }
  }

  while(i<left.length){
    result.push(left[i++]);
  }

  while(j<right.length){
    result.push(right[j++]);
  }

  return result;
}
const arr = [1,2,45,3,31,21,6]
console.log(mergeSort(arr))