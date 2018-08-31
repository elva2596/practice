/**
 *缺点:无法判断对象类型(即使用instanceof)
 *
 */
function Person(name,age) {
  const o = new Object();
  o.name = name;
  o.age = age;
  o.sayName = function (){
    console.log(this.name)
  }
  return o;
}

const person1 = new Person("dailu",25);
person1.sayName()
console.log(person1 instanceof Person)

// 创建一个具有额外方法的特殊数组

function SpecialArr() {
  const arr = new Array();
  arr.push.apply(arr,arguments);
  arr.toPipedString = function (){
    return this.join('|')
  }
  return arr;
}

const arr = new SpecialArr("aaa","bbb","ccc");
console.log(arr.toPipedString())