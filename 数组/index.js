/**
 * 数组的toString()返回数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串
 * valueOf返回的还是数组 
 *
 */

 const colors = ["red","blue","green"];

 console.log(colors.toString())
 console.log(colors.valueOf())
 console.log(colors)
 console.log(colors.join('||'));//数组变字符串


//  合并数组
const colors2 = ["a","b","c"]
// console.log(colors2.concat("d",colors))
Array.prototype.push.apply(colors2,colors);
console.log(colors2)

// 函数作为返回值的用处

function createComparisonFunction (prop) {
    return (obj1,obj2) => {
      const value1 = obj1[prop];
      const value2 = obj2[prop];
      if(value1<value2){
          return -1
      }else if(value1>value2){
          return 1
      }else{
          return 0;
      }
    }
}

const data = [{name:"dailu",age:25},{name:"zst",age:24}];
data.sort(createComparisonFunction("age"));
console.log(data)