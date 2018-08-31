/**
 * 组合使用构造函数和原型模式
 */
function Person (name,age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function (){
  console.log(this.name);
}
Person.prototype.sayAge = function() {
  console.log(this.age);
}

const person1 = new Person("dailu",25);
person1.sayName();
const person2 = new Person("zansongting",24);
person2.sayAge()