/**
 *选择排序:
*最好情况:o(n²)
*一般情况:o(n²)
*最差情况:o(n²)
*思想:直接插入到一个有序的序列中
*稳定性:不稳定
*/
function swamp(arr,i,j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function insertSort(arr) {
  const len = arr.length;
  let j,temp;
  for(let i=1;i<len;i++){
    j = i;
    temp = arr[i];
    while(j>0&&arr[j-1]>temp){
      arr[j] = arr[j-1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

const arr = [1,2,45,3,31,21,6];
console.log(insertSort(arr))