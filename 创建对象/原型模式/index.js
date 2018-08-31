/**
 *原型模式 ： 
 *
 * 优点:实例可以共享属性和方法
 * 缺点：实例不能拥有术语自己的属性和方法，并且实例化时无法传参
 */
function Person(){}
Person.prototype.name = "dailu";
Person.prototype.age = 25;
Person.prototype.sayName = function(){
  console.log(this.name)
}

// 判断属性在实例中还是在原型中

function hasPrototypeProperty(obj,prop){
  
  return !obj.hasOwnProperty(prop) && prop in obj;
}

const person1 = new Person();
Person.prototype.sayAge = function (){
  console.log(this.age)
}

Person.prototype = {
  name:"zansongting",
  age:24,
  sayName(){
    console.log(this.name)
  }
}
person1.name = 'dailu';
console.log(hasPrototypeProperty(person1,'name'))
person1.sayAge()
person1.sayName()
// for in 会获取对象中所有可枚举的属性，无论在实例中还是在原型中
// Object.key会获取实例中所有可枚举的属性


// 重写原型对象会切断现有原型与之前实例之间的联系

