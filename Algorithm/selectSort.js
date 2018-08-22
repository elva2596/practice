/**
 *选择排序:
*最好情况:o(n²)
*一般情况:o(n²)
*最差情况:o(n²)
*思想:找最小的值索引
*稳定性:不稳定
*/
function swamp(arr,i,j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectSort(arr) {
  const len = arr.length;
  let minIndex;
  for(let i=0;i<len-1;i++){
    minIndex = i;
    for(let j=i;j<len;j++){
      if(arr[minIndex]>arr[j]){
        minIndex = j;
      }
    }
    swamp(arr,minIndex,i);
  }
  return arr;
}

const arr = [1,2,45,3,31,21,6];
console.log(selectSort(arr))