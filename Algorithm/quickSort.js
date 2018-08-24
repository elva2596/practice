/**
 *快速排序:
 *最好情况:o(nlogn)
 *一般情况:o(nlogn)
 *最差情况:o(n²)
 *思想:左右哨兵
 *稳定性:不稳定
 */

function swamp(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr,left,right){
  if(arr.length<=1) return arr;
  let index = partion(arr,left,right);
  if(left<index-1) {quickSort(arr,left,index-1);}
  if(right>index) {quickSort(arr,index,right);}
}
function partion(arr,left,right){
  const povit = arr[Math.floor((left+right)/2)];
  while(left<=right){
    while(arr[left]<povit){
      left++;
    }

    while(arr[right]>povit){
      right--;
    }

    if(left<=right){
      swamp(arr,left,right);
      left++;
      right--;
    }
  }
  return left;
}
const arr = [1, 2, 45, 3, 31, 21, 6]
console.log(quickSort(arr))