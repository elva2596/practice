/**
 *构造函数模式
 * 优点:区分对象的类型
 * 缺点:实例不能共享属性和方法
 * @param {*} name
 * @param {*} job
 * @param {*} age
 */
function Person(name,job,age) {
  this.name = name;
  this.job = job;
  this.age = age;
  this.sayName = function (){
    console.log(this.name)
  }
}